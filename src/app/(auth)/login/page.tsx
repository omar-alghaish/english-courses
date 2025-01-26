'use client'
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-primary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md backdrop-blur-sm border-border/50 shadow-xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-[#7c3aed] bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <p className="text-muted-foreground">
            Sign in to continue to your account
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-11"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </Button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-muted-foreground">
                  Remember me
                </Label>
              </div>
              <Button variant="link" className="text-primary hover:text-primary/80 h-auto p-0">
                Forgot Password?
              </Button>
            </div>

            {/* Login Button */}
            <Button className="w-full bg-gradient-to-r from-primary to-[#7c3aed] hover:shadow-lg hover:shadow-primary/20 transition-all gap-2">
              Sign In
              <ArrowRight size={18} className="mt-0.5" />
            </Button>
          </form>

          {/* Social Login */}
          <div className="relative">
            <Separator className="my-8" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-card text-sm text-muted-foreground">
              Or continue with
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="w-full gap-2">
              {/* <Google className="w-5 h-5" /> */}
              Google
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </div>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            Do not have an account?{' '}
            <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto">
              Create account
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}