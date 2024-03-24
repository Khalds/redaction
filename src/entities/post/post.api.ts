import { IPost } from './post.typed'

export const postApi = {
  getPosts: (page = 1, limit = 10): Promise<IPost[]> =>
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    ).then((response) => response.json()),

  getParticularPost: (postId: number): Promise<IPost> =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      (response) => response.json()
    )
}
