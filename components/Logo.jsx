'use client'

import React, { useEffect, useState } from 'react'

export default function Logo() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const html = document.documentElement

    const checkDark = () => {
      setIsDarkMode(html.classList.contains('dark'))
    }

    checkDark()

    const observer = new MutationObserver(() => {
      checkDark()
    })

    observer.observe(html, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const logoSrc = isDarkMode ? '/dark_mode_logo.svg' : '/light_mode_logo.svg'

  return (
    <img
      src={logoSrc}
      alt={isDarkMode ? 'Logo Dark' : 'Logo Light'}
      width={80}
      height={80}
      className="transition duration-300 ease-in-out"
    />
  )
}