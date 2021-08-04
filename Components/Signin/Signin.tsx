import React from 'react';
import { Button } from 'antd';
import {LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { useSession, signIn, signOut } from 'next-auth/client';

export default function Signin() {
  const [session] = useSession();

  if (session) {
    return (
      <div className="sign in">
        <span>
          { session.user?.name}
        </span>
        <Button size="small"><LogoutOutlined onClick={() => signOut()} /></Button>
      </div>
    );
  }
  return (
    <div className="sign out">
      <span>
        Sign in with email
      </span>
      <Button size="small" onClick={() => signIn()}><LoginOutlined /></Button>
    </div>
  );
}