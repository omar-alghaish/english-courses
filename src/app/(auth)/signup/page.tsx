'use client'
import { motion } from 'framer-motion'
import { Lock, Mail, User,  ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e5e9f2] dark:from-background dark:to-muted flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      />

      <Card className="w-full max-w-md backdrop-blur-sm bg-card border-border/20 shadow-2xl relative overflow-hidden">
        {/* Decorative header */}
        {/* <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-purple-500" /> */}

        <CardHeader className="pb-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center mb-6"
          >
            {/* <Gem className="w-12 h-12 text-primary" strokeWidth={1.5} /> */}
          </motion.div>
          <CardTitle className="text-center text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Join Our Community
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Name Input */}
            <div className="relative group">
              <Label className="block mb-2 text-muted-foreground">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  className="pl-10 pr-4 py-6 rounded-xl border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative group">
              <Label className="block mb-2 text-muted-foreground">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  className="pl-10 pr-4 py-6 rounded-xl border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="name@example.com"
                  type="email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative group">
              <Label className="block mb-2 text-muted-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  className="pl-10 pr-4 py-6 rounded-xl border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-2"
          >
            <Button className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-purple-500 hover:to-purple-600 transition-all shadow-lg hover:shadow-primary/20 gap-2">
              Create Account
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/30" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-card text-sm text-muted-foreground">
                Or continue with
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="w-full gap-4"
          >
            <Button variant="outline" className="w-full py-5 rounded-xl border-border/50 hover:border-primary/30 gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <GoogleIcon />
              </svg>
              Google
            </Button>
           
          </motion.div>
        </CardContent>

        <CardFooter className="justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-muted-foreground text-center"
          >
            Already have an account?{' '}
            <Button variant="link" className="text-primary p-0 h-auto hover:no-underline">
              Sign in
            </Button>
          </motion.p>
        </CardFooter>
      </Card>

      {/* Floating sparkles animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <Sparkles className="w-4 h-4 text-primary/50" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

// Simple Google icon component
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
)