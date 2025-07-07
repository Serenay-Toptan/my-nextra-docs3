import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Logo from './Logo'

export default function Header() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Sayfa yüklendiğinde mounted'u true yap, böylece hydration problemi çözülür
  useEffect(() => {
    setMounted(true)
  }, [])
  

  if (!mounted) return null

  // resolvedTheme 'dark' veya 'light' döner; 'system' olmaz, çünkü next-themes çözüyor
  const isDark = resolvedTheme === 'dark'

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px',
        borderBottom: '1px solid #333',
        backgroundColor: isDark ? '#000' : '#fff',  // Dark modda siyah, light modda beyaz
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'background-color 0.3s ease',
      }}
    >
      <Logo />
      <nav style={{ display: 'flex', gap: '24px', fontWeight: 600 }}>
        {[
          { href: '/', label: 'Home' },
          { href: '/products', label: 'Products' },
          { href: '/services', label: 'Services' },
          { href: '/about', label: 'About Us' },
          { href: '/contact', label: 'Contact' },
        ].map(({ href, label }) => (
          <Link key={href} href={href} legacyBehavior>
            <a
              style={{
                color: isDark ? 'white' : 'black',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#800080')}
              onMouseLeave={e => (e.currentTarget.style.color = isDark ? 'white' : 'black')}
            >
              {label}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  )
}
