

export const ENDPOINTS = {
  USER: {
    INDEX: "users",
    DETAIL: (id) => `users/${id}`,
  },

  ALBUM: {
    INDEX: "albums",
    DETAIL: (id) => `albums/${id}`,
  },

  POSTS: {
    INDEX: "posts",
    DETAIL: (id) => `posts/${id}`,
  },
};