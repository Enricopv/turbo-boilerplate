import axios from 'axios'
import type {AxiosRequestConfig, AxiosResponse} from 'axios'

function get(info: {url: string, config?: AxiosRequestConfig<any>}): Promise<AxiosResponse<any, any>> {
  return axios.get(info.url, info.config)
}

export const requester = {
  get
}