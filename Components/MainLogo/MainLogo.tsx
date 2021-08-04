import React from 'react';
import Link from 'next/link';

export default function MainLogo() {
  return (
    <div className="main-logo">
      <Link href="/">
        <img width={70} height={65} src="logo.png" alt="wallaby logo" />
      </Link>
    </div>
  );
}