import { useEffect, useMemo, useState } from 'react'
import { IPost } from '../../../entities/post/post.typed'
import { useParams } from 'react-router-dom'
import { postApi } from '../../../entities/post/post.api'

export const useGetParticularPost = () => {
  const [postData, setPostData] = useState<IPost | null>(null)
  const params = useParams()
  const postId = useMemo(() => params.postId as string, [params.postId])

  useEffect(() => {
    const fetchPosts = async (loadMore = false) => {
      const data = await postApi.getParticularPost(+postId)
      setPostData(data)
    }

    fetchPosts()
  }, [postId])

  return { postData, postId }
}
