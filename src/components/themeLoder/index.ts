// components/ThemeLoader.tsx
'use client'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentTheme } from '@/redux/features/theme/themeSelector'

export const ThemeLoader = () => {
  const effectiveTheme = useSelector(selectCurrentTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', effectiveTheme === 'dark')
  }, [effectiveTheme])

  return null
}