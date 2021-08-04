import React from 'react';
import { useSession } from 'next-auth/client';

export default function profile() {
  const [session] = useSession();

  if (session) {
    return (
      <div>
        {session.user?.name}
        {' '}
        {session.expires}
      </div>
    );
  }

  return (
    <div>Please sign in</div>
  );
}