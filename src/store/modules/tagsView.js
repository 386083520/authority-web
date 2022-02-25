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
  },
  DEL_VISITED_VIEW: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  }
}

const actions = {
  addView ({ dispatch }, view) {
    dispatch('addVisitedView', view)
  },
  addVisitedView ({ commit }, view) {
    commit('ADD_VISITED_VIEW', view)
  },
  delVisitedView ({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_VISITED_VIEW', view)
      resolve([...state.visitedViews])
    })
  },
  delView ({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delVisitedView', view)
      resolve({
        visitedViews: [...state.visitedViews]
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
