import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px',
        borderBottom: '1px solid #333',
        backgroundColor: '#000',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo + Şirket İsmi */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image src="/logo.png" alt="Aifano" width={40} height={40} />
        <span
          style={{
            marginLeft: 10,
            fontWeight: 'bold',
            fontSize: '1.3rem',
            color: '#800080', // mor renk (#800080 purple)
          }}
        >
          Aifano
        </span>
      </Link>

      {/* Menü */}
      <nav style={{ display: 'flex', gap: '24px', fontWeight: 600 }}>
        {[
          { href: '/', label: 'Home' },
          { href: '/products', label: 'Products' },
          { href: '/services', label: 'Services' },
          { href: '/about', label: 'About Us' },
          { href: '/contact', label: 'Contact' },
        ].map(({ href, label }) => (
          <Link key={href} href={href} passHref legacyBehavior>
            <a
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#800080')}
              onMouseLeave={e => (e.currentTarget.style.color = 'white')}
            >
              {label}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
