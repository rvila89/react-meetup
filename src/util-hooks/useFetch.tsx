import { useState, useEffect } from 'react'

export const useFetch = ({ url }: { url: string }) => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])

  return {
    data,
    error,
    isLoading,
  }
}
