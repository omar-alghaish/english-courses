import React, { useEffect, useState } from 'react'
import Avatar from '../ui/avatar'
import { Separator } from '../ui/separator'
import { Bell } from 'lucide-react'
import { SidebarTrigger } from '../ui/sidebar'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isPastThreshold = window.scrollY > 50
      setIsScrolled(isPastThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Main header with conditional positioning */}
      <header
        className={`flex h-16 shrink-0 items-center justify-between gap-2 ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 transition-all duration-300 ${
          isScrolled 
            ? 'sticky left-0 right-0 top-0 mx-auto w-[96%] bg-sidebar-ring mt-[10px] rounded-2xl shadow-sm z-50'
            : 'w-full bg-transparent '
        }`}
      >
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>
        <div className="flex items-center gap-6 px-4">
          <Bell />
          <Avatar
            className="h-[45px] w-[45px]"
            image=""
            fallback="omar alghaish"
          />
        </div>
      </header>

      {/* Placeholder to prevent content jump when header becomes fixed */}
      {!isScrolled && <div className="h-16 w-full" />}
    </>
  )
}

export default Header