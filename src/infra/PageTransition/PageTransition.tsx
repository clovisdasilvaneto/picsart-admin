import React, { createContext } from 'react'
import { motion, HTMLMotionProps, AnimationControls, AnimatePresence } from 'framer-motion'
import { IPageTransitionProviderProps } from './types'
import { usePathname } from 'next/navigation'
import { transition } from './constants'

type PageTransitionProps = HTMLMotionProps<'div'>

function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export const PageTransitionContext = createContext<AnimationControls | null>(null)

export function PageTransitionProvider({ controls, children }: IPageTransitionProviderProps) {
  return <PageTransitionContext.Provider value={controls}>{children}</PageTransitionContext.Provider>
}

export default PageTransition
