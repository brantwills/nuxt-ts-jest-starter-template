// sample typescript logo store 

interface State {
  logo: string
}

export const state = (): State => ({
  logo: 'example'
})

export const actions = {
  logoAction({ commit }, name: string) {
    commit('SET_LOGO', name)
  }
}

export const mutations = {
  SET_LOGO(state: State, data: string) {
    state.logo = data
  }
}

export const getters = {
  logo: (state) => state.logo
}
