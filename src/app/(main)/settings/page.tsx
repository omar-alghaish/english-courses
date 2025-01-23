'use client'
import React, { useState, useEffect } from 'react'
import { Sun, Moon, Monitor, Lock, User, Bell, Palette } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const SettingsPage = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light')
  const [notifications, setNotifications] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system'
    setTheme(savedTheme)
    
    if (savedTheme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.classList.toggle('dark', systemDark)
    } else {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    if (newTheme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.classList.toggle('dark', systemDark)
    } else {
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account preferences and settings
          </p>
        </motion.div>

        {/* Theme Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Palette className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Appearance
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <Label className="text-gray-700 dark:text-gray-300">Theme</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    theme === 'light'
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-indigo-200'
                  }`}
                >
                  <div className="space-y-2">
                    <Sun className="w-6 h-6 text-gray-900 dark:text-white" />
                    <p className="text-gray-900 dark:text-white">Light</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Bright color scheme
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    theme === 'dark'
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-indigo-200'
                  }`}
                >
                  <div className="space-y-2">
                    <Moon className="w-6 h-6 text-gray-900 dark:text-white" />
                    <p className="text-gray-900 dark:text-white">Dark</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Dark color scheme
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => handleThemeChange('system')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    theme === 'system'
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-indigo-200'
                  }`}
                >
                  <div className="space-y-2">
                    <Monitor className="w-6 h-6 text-gray-900 dark:text-white" />
                    <p className="text-gray-900 dark:text-white">System</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Follow system settings
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Account Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <User className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Account Settings
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700 dark:text-gray-300">Email</Label>
                <p className="text-gray-500 dark:text-gray-400">
                  user@example.com
                </p>
              </div>
              <Button variant="outline">Change Email</Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700 dark:text-gray-300">Password</Label>
                <p className="text-gray-500 dark:text-gray-400">
                  Last changed 3 months ago
                </p>
              </div>
              <Button variant="outline">Change Password</Button>
            </div>
          </div>
        </motion.div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Security
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-gray-700 dark:text-gray-300">
                Two-factor Authentication
              </Label>
              <p className="text-gray-500 dark:text-gray-400">
                Add an extra layer of security
              </p>
            </div>
            <Switch
              checked={twoFactor}
              onCheckedChange={setTwoFactor}
            />
          </div>
        </motion.div>

        {/* Notifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Notifications
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-gray-700 dark:text-gray-300">
                Email Notifications
              </Label>
              <p className="text-gray-500 dark:text-gray-400">
                Receive important updates
              </p>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SettingsPage