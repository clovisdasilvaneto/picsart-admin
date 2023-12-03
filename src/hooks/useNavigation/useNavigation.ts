import { PageTransitionContext } from '@/infra/PageTransition/PageTransition'
import { useRouter } from 'next/navigation'
import { useCallback, useContext } from 'react'

function useNavigation() {
  const router = useRouter()

  const controls = useContext(PageTransitionContext)

  const onRoute = useCallback(
    (href: string) => async () => {
      if (!controls) return

      router.prefetch(href)
      controls.start('exit')

      setTimeout(() => {
        router.push(href)
      }, 300)
    },
    [router, controls],
  )

  return onRoute
}

export default useNavigation
