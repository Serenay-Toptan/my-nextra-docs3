// components/Logo.jsx
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function Logo() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // İlk mount öncesinde herhangi bir render yapma (SSR hydration hatası önlemek için)
  if (!mounted) return null

  // resolvedTheme === 'system' olabilir, bunu da kontrol etmek istersen:
  const logoSrc = resolvedTheme === 'dark' ? '/dark_mode_logo.svg' : '/light_mode_logo.svg'

  return (
    <>
      {resolvedTheme === 'dark' ? (
        <img src="/dark_mode_logo.svg" alt="Logo Dark" width={80} height={80} />
      ) : (
        <img src="/light_mode_logo.svg" alt="Logo Light" width={80} height={80} />
      )}
    </>
  )
}
