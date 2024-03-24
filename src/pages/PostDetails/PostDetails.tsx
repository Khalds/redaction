import styles from './PostDetails.module.scss'
import { useGetParticularPost } from '../Posts/hooks'

export const PostDetails = () => {
  const {postData,postId} = useGetParticularPost()

  if (!postData) return null

  return (
    <div className={styles.root}>
      <h2>
        {postId}. {postData.title[0].toUpperCase() + postData.title.slice(1)}
      </h2>
      <p>{postData.body}</p>
    </div>
  )
}
