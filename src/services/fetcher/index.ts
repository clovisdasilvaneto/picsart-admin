import { API_URL } from '@/infra/constants'
import { QueryOptions } from '@tanstack/react-query'
import axios from 'axios'

const fetcher = async <T>({ queryKey }: QueryOptions): Promise<T[]> => {
  const resp = await axios(API_URL + (queryKey as string[])[0], {
    method: 'get',
  })

  return resp.data
}

export default fetcher
