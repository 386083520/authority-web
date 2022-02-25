const state = {
  visitedViews: []
}

const mutations = {
  ADD_VISITED_VIEW: (state, view) => {
    if (state.visitedViews.some(v => v.path === view.path)) return
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
    console.log('gsdvisitedViews', state.visitedViews)
  }
}

const actions = {
  addView ({ dispatch }, view) {
    dispatch('addVisitedView', view)
  },
  addVisitedView ({ commit }, view) {
    commit('ADD_VISITED_VIEW', view)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
