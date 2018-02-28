import Vue from 'vue'
import axios from 'axios'

const { prototype: proto } = Vue

axios.defaults.baseURL = SERVER_PREFIX + 'api'

if (!__DEV__ || !proto.hasOwnProperty('$http')) {
  Object.defineProperty(
    proto,
    '$http',
    __SERVER__
      ? {
          get() {
            return this.$ssrContext.axios
          },
        }
      : { value: axios },
  )
}