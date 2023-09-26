import { useQuery } from '@tanstack/react-query'
import autoFetch from './axios/globalFetch'
export const useGetImages = (text) => {
  const { isLoading, data, isError, error,refetch } = useQuery({
    queryKey: ['gallery'],
    queryFn: () =>
      autoFetch.get('/', {
        params: {
          query: text,
        },
      }),
  })
  return { isLoading, data, isError, error,refetch }
}
