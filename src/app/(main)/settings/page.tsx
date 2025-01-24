'use client'
import React, { useEffect } from 'react'
import { Sun, Moon, Monitor, Lock, User, Bell, Palette } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '@/redux/features/theme/themeSlice'
import { RootState } from '@/redux/store/store'
import { selectCurrentTheme } from '@/redux/features/theme/themeSelector'

const SettingsPage = () => {
  const dispatch = useDispatch()
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme)
  const effectiveTheme = useSelector(selectCurrentTheme)
  const [notifications, setNotifications] = React.useState(true)
  const [twoFactor, setTwoFactor] = React.useState(false)

  // Apply theme class to HTML element
  useEffect(() => {
    document.documentElement.classList.toggle('dark', effectiveTheme === 'dark')
  }, [effectiveTheme])

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'device') => {
    dispatch(setTheme(newTheme))
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold text-foreground">Account Settings</h1>
          <p className="text-muted-foreground">
            Manage your preferences and security settings
          </p>
        </motion.div>

        {/* Theme Section */}
        // Theme Section
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm"
>
  <div className="flex items-center gap-3 mb-6">
    <Palette className="w-6 h-6 text-primary" />
    <h2 className="text-xl font-semibold text-foreground">
      Appearance
    </h2>
  </div>

  <div className="space-y-6">
    <div className="flex flex-col gap-4">
      <Label className="text-foreground">Interface Theme</Label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { value: 'light' as 'light', icon: Sun, label: 'Light', desc: 'Bright theme' },
          { value: 'dark' as 'dark', icon: Moon, label: 'Dark', desc: 'Dark theme' },
          { value: 'device' as 'device', icon: Monitor, label: 'System', desc: 'Follow system setting' }
        ].map((themeOption) => (
          <motion.button
            key={themeOption.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleThemeChange(themeOption.value)}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentTheme === themeOption.value
                ? 'border-primary bg-primary/10'
                : 'border-muted hover:border-accent'
            }`}
          >
            <div className="space-y-2">
              <themeOption.icon className="w-6 h-6 text-foreground" />
              <p className="text-foreground">{themeOption.label}</p>
              <p className="text-sm text-muted-foreground">
                {themeOption.desc}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  </div>
</motion.div>


        {/* Account Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <User className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Account Details
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-foreground">Email Address</Label>
                <p className="text-muted-foreground">
                  user@example.com
                </p>
              </div>
              <Button variant="outline" className="hover:bg-accent">
                Update Email
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-foreground">Password</Label>
                <p className="text-muted-foreground">
                  Last changed 3 months ago
                </p>
              </div>
              <Button variant="outline" className="hover:bg-accent">
                Change Password
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Security
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-foreground">
                Two-factor Authentication
              </Label>
              <p className="text-muted-foreground">
                Enhanced account protection
              </p>
            </div>
            <Switch
              checked={twoFactor}
              onCheckedChange={setTwoFactor}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </motion.div>

        {/* Notifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Notifications
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-foreground">
                Email Notifications
              </Label>
              <p className="text-muted-foreground">
                Important updates and reminders
              </p>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SettingsPage