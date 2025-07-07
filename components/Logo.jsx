// components/Logo.jsx
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function Logo() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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
