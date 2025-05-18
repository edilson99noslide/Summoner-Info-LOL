import { ref } from 'vue'
import axios from '@/services/axios'

// TYPE
import { ApiRequestType } from '@/types/composables/api/api.type'

export function useApi() {
  const loading = ref(false)
  const error = ref(null)

  const request = async <T>(
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    options: ApiRequestType = {}
  ): Promise<any> => {
    loading.value = true
    error.value = null

    try {
      const response = await axios.request({
        method,
        url,
        params: options?.params,
        data: options?.data,
      })

      return response.data
    } catch (error: any) {
      error.value = error

      throw error
    } finally {
      loading.value = false
    }

    const get  = <T>(url: string, params?: any): Promise<T> => request('get', url, params)
    const post = <T>(url: string, params?: any): Promise<T> => request('post', url, params)
    const put  = <T>(url: string, params?: any): Promise<T> => request('put', url, params)
    const del  = <T>(url: string, params?: any): Promise<T> => request('delete', url)

    return {
      loading,
      error,
      get,
      post,
      put,
      del
    }
  }
}