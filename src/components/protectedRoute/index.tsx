// components/protected-route.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
// import { useAuth } from '@/hooks/use-auth' // Your auth hook

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()
//   const { user, loading } = useAuth()
const user = null
  useEffect(() => {
    if ( !user) {
      router.push('/login')
    }
  }, [user,  router])

//   if (loading || !user) {
//     return <div>Loading...</div>
//   }

  return <div>{children}</div>
}