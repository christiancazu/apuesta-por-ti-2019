import posts from 'src/data/posts'

export const state = {
  posts,
  postsFilters: posts.slice().reverse()
}
export const getters = {
  posts: state => filter => state.posts.filter(p => p.type === filter)
}

export const mutations = {
  FILTER_DATA: (state, payload) => {
    switch (payload) {
    case 'indictmenteds':
      state.postsFilters = state.posts
        .filter(p => p.type === 'requisitoriado')
        .slice()
        .reverse()
      break
    case 'losts':
      state.postsFilters = state.posts
        .filter(p => p.type === 'perdido')
        .slice()
        .reverse()
      break
    default:
      state.postsFilters = state.posts.slice().reverse()
      break
    }
  },
  ADD_NEW_POST: ({}, payload) => {
    state.posts.push(payload)
    state.postsFilters = state.posts.slice().reverse()
  }
}
