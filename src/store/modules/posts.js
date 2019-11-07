import posts from 'src/data/posts'

export const state = {
  posts,
  postsFilters: posts
}
export const getters = {
  posts: state => filter => state.posts.filter(p => p.type === filter)
}

export const mutations = {
  FILTER_DATA: (state, payload) => {
    switch (payload) {
    case 'indictmenteds':
      state.postsFilters = state.posts.filter(p => p.type === 'requisitoriado')
      break
    case 'losts':
      state.postsFilters = state.posts.filter(p => p.type === 'perdido')
      break
    default:
      state.postsFilters = state.posts
      break
    }
  }
}
