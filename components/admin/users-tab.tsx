'use client';

import { useState, useEffect } from 'react';
import { UserPlus, Pencil, Trash2, ShieldCheck, Loader2, X } from 'lucide-react';

export function UsersTab() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'USER',
    department: 'Department A'
  });

  // --- ROBUST COOKIE HELPER ---
  const getToken = () => {
    if (typeof document === 'undefined') return null;
    const name = "auth-token=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return null;
  };

  const fetchUsers = async () => {
    const token = getToken();
    if (!token) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/users', { // No trailing slash
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Space after Bearer
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        const errorData = await response.json();
        console.log("Full Error Object:", errorData); // Look at this in console!
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = getToken();
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setIsModalOpen(false);
      setFormData({ username: '', email: '', password: '', role: 'USER', department: 'Department A' });
      fetchUsers();
    } else {
      alert("Failed to add user. Verify your Admin privileges.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">User Management</h2>
          <p className="text-white/50">Manage system access</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-indigo-500/20"
        >
          <UserPlus size={20} /> Add User
        </button>
      </div>

      {/* User Table */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/10">
            <tr>
              <th className="px-8 py-5 text-white/50 text-sm font-bold uppercase tracking-wider">User</th>
              <th className="px-8 py-5 text-white/50 text-sm font-bold uppercase tracking-wider">Role</th>
              <th className="px-8 py-5 text-white/50 text-sm font-bold uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {isLoading ? (
              <tr><td colSpan={3} className="py-20 text-center"><Loader2 className="animate-spin inline mr-2 text-indigo-400" /> Loading Database...</td></tr>
            ) : users.length === 0 ? (
              <tr><td colSpan={3} className="py-20 text-center text-white/30 italic">No users found.</td></tr>
            ) : users.map((u: any) => (
              <tr key={u.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-8 py-6">
                  <div className="font-bold text-white tracking-tight">{u.username}</div>
                  <div className="text-sm text-white/40">{u.email}</div>
                </td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${u.role.toUpperCase() === 'ADMIN'
                    ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    }`}>
                    {u.role.toUpperCase()}
                  </span>
                </td>
                <td className="px-8 py-6 text-right space-x-2">
                  <button onClick={async () => {
                    if (confirm(`Remove ${u.username}?`)) {
                      await fetch(`/api/users/${u.id}`, {
                        method: 'DELETE',
                        headers: { 'Authorization': `Bearer ${getToken()}` }
                      });
                      fetchUsers();
                    }
                  }} className="p-2 hover:bg-red-500/20 rounded-xl text-red-400/50 hover:text-red-400 transition-all">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-sm">
          <div className="bg-[#0f1d3a] border border-white/10 p-8 rounded-[2.5rem] w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold tracking-tight">Add New User</h3>
              <button onClick={() => setIsModalOpen(false)} className="hover:rotate-90 transition-transform text-white/40 hover:text-white"><X /></button>
            </div>
            <form onSubmit={handleAddUser} className="space-y-4">
              <input
                type="text" placeholder="Username" required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                onChange={e => setFormData({ ...formData, username: e.target.value })}
              />
              <input
                type="email" placeholder="Email" required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="password" placeholder="Password" required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                onChange={e => setFormData({ ...formData, password: e.target.value })}
              />
              <input
                type="text" placeholder="Department" required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                onChange={e => setFormData({ ...formData, department: e.target.value })}
              />
              <select
                className="w-full bg-[#162a54] border border-white/10 rounded-xl p-4 outline-none appearance-none"
                value={formData.role} // Bind the value
                onChange={e => setFormData({ ...formData, role: e.target.value })}
              >
                <option value="USER">USER</option>
                <option value="SUPERVISOR">SUPERVISOR</option>
                <option value="ADMIN">ADMIN</option>
                <option value="DATA PROTECTION OFFICER">DATA PROTECTION OFFICER (Viewer)</option>
              </select>

              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-indigo-600/30 transition-all">
                Create User
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}