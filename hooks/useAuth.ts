import { useState, useEffect } from 'react';

export function useAuth() {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userRole = document.cookie
      .split('; ')
      .find(row => row.startsWith('user-role='))
      ?.split('=')[1];
    
    setRole(userRole || null);
    setLoading(false);
  }, []);

  return { role, loading };
}