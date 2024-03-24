import React from 'react'
import styles from './Posts.module.scss'
import { Post } from './components/Post'
import { useGetPosts } from './hooks'

export const Posts: React.FC = () => {
  const { posts, loading, currentParamsPage, loadMorePosts, ref } =
    useGetPosts()

  return (
    <div className={styles.container}>
      <h1>Posts:</h1>
      <div className={styles.posts}>
        {posts.map((post, idx) => (
          <Post
            key={post.id}
            {...post}
            idx={idx}
            lastElRef={idx === posts.length - 1 ? ref : null}
          />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {+currentParamsPage < 5 ? null : (
        <button onClick={loadMorePosts}>Load More</button>
      )}
    </div>
  )
}
