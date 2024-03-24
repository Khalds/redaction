import { useCallback, useEffect, useMemo, useState } from 'react'
import { useIntersectionObserver } from '../../../shared/hooks/useIntersectionObserver'
import { postApi } from '../../../entities/post/post.api'
import { useSearchParams } from 'react-router-dom'

export const useGetPosts = () => {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [searchParams, setSearchParams] = useSearchParams()

  const currentParamsPage = useMemo(
    () =>
      searchParams.get('currentPage')
        ? +(searchParams.get('currentPage') as string)
        : 0,
    [searchParams]
  )

  const fetchPosts = useCallback(
    async (loadMore = false, pageAlreadySet = false) => {
      setLoading(true)
      const nextPageToLoad = pageAlreadySet
        ? currentParamsPage
        : currentParamsPage + 1
      const step = 10

      if (loadMore || currentParamsPage === 0) {
        setSearchParams((params) => {
          params.set('currentPage', String(nextPageToLoad))
          return params
        })
      }

      const data = await postApi.getPosts(1, nextPageToLoad * step)
      setPosts(data)
      setLoading(false)
    },
    [currentParamsPage, setSearchParams]
  )

  useEffect(() => {
    const pageAlreadySet = !!searchParams.get('currentPage')
    fetchPosts(false, pageAlreadySet)
  }, [fetchPosts, searchParams])

  const { ref } = useIntersectionObserver({
    onIntersect: () => fetchPosts(true),
    enabled: !loading && +currentParamsPage < 5
  })

  const loadMorePosts = () => {
    fetchPosts(true)
  }

  return { posts, loading, currentParamsPage, loadMorePosts,ref }
}
