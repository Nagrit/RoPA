'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const role = document.cookie
      .split('; ')
      .find(row => row.startsWith('user-role='))
      ?.split('=')[1];

    if (!role) {
      router.push('/login');
    } else if (!allowedRoles.includes(role)) {
      router.push('/dashboard'); 
    } else {
      setAuthorized(true);
    }
  }, [allowedRoles, router]);

  if (!authorized) return null; // Or a loading spinner

  return <>{children}</>;
}