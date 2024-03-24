import { FC } from 'react'
import styles from './Post.module.scss'
import { IPost } from '../../../../entities/post/post.typed'
import { Link } from 'react-router-dom'

type TProps = {
  lastElRef: React.MutableRefObject<HTMLDivElement>
  idx: number
} & IPost

export const Post: FC<TProps> = ({
  id,
  title,
  body,
  userId,
  lastElRef,
  idx
}) => {
  return (
    <Link className={styles.link} to={`/posts/${id}`}>
      <div
        ref={lastElRef}
        style={{ color: !!lastElRef ? 'red' : '#000' }}
        className={styles.post}
      >
        <h4>
          {idx + 1}. {title[0].toUpperCase() + title.slice(1)}
        </h4>
        <p>{body}</p>
      </div>
    </Link>
  )
}
