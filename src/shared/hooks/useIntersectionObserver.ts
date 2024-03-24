import { useCallback, useRef } from 'react'

export const useIntersectionObserver = ({
  onIntersect,
  enabled = true
}: {
  onIntersect: () => void
  enabled?: boolean
}) => {
  const observer = useRef<IntersectionObserver>()

  const ref = useCallback(
    (node: HTMLElement) => {
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting && enabled) {
          onIntersect()
        }
      })
      if (node) observer.current.observe(node)
    },
    [enabled, onIntersect]
  )

  return { ref }
}
