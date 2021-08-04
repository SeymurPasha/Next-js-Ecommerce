import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h3 style={{ color: 'white' }}>Shop</h3>
        <li>
          <Link href="/">
            <a href="/#">Shop on Wallaby</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a href="/#">Gift cards</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a href="/#">Wallaby blog</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a href="/#">More</a>
          </Link>
        </li>
      </div>

      <div>
        <h3 style={{ color: 'white' }}>About</h3>
        <li>
          <Link href="/">
            <a href="/#">Wallaby, Inc</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a href="/#">Policies</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a href="/#">Investors</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a href="/#">Careers</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a href="/#">Press</a>
          </Link>
        </li>
      </div>

      <div>
        <h3 style={{ color: 'white' }}>Help</h3>
        <li>
          <Link href="/">
            <a href="/#">Help Center</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a href="/#">Trust and safety</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a href="/#">Privacy settings</a>
          </Link>
        </li>

      </div>

      <div>
        <h3 style={{ color: 'white' }}>Sell</h3>
        <li>
          <Link href="/">
            <a href="/#">Sell on Wallaby</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a href="/#">Teams</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a href="/#">Forums</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a href="/#">Affiliates</a>
          </Link>
        </li>

      </div>
    </div>
  );
}