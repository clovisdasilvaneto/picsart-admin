import { TNoteForm } from '@/containers/components/AddNote/types'
import axios from 'axios'
import fetcher from '../fetcher'
import { API_URL } from '@/infra/constants'

export const notesQueryKeys = {
  list: {
    key: ['posts'],
    fetcher: fetcher,
  },
}

export const addNoteMutation = (data: TNoteForm) => {
  //TODO: axios call could be inside the fetch instance
  const resp = axios.post(API_URL + 'posts', {
    userId: 1,
    id: 1,
    title: data.note,
    body: data.note,
  })

  return resp
}
