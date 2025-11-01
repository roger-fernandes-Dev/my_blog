'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AnimateWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
    const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return <div>{children}</div> // não anima no SSR

  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={pathname} // important!
        initial={{ opacity: 0, y: 25}}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
