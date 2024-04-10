'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Switch } from '@/components/ui/switch'

export default function ThemeToggle() {
  const { setTheme, systemTheme, theme } = useTheme()

  const isDark = theme === 'system' ? systemTheme === 'dark' : theme === 'dark'

  const changeTheme = (check: boolean) => {
    setTimeout(() => {
      if (check) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }, 100)
  }

  return (
    <div className="relative">
      <div className="absolute -z-10 w-full px-4 top-0 translate-y-1/2 flex justify-between text-purple-400/70">
        <Sun className="w-6 h-6" />
        <Moon className="w-6 h-6" />
      </div>
      <Switch
        checked={isDark}
        onCheckedChange={(check) => {
          changeTheme(check)
        }}
      />
    </div>
  )
}
