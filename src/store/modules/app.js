import { TOGGLE_MOBILE_TYPE } from '@/store/mutation-types'
const app = {
  state: {
    isMobile: false
  },
  mutations: {
    [TOGGLE_MOBILE_TYPE]: (state, isMobile) => {
      state.isMobile = isMobile
    }
  }
}
export default app