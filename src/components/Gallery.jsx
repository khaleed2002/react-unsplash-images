import { useEffect } from 'react'
import { useGetImages } from '../reactQuery'

const Gallery = ({ searchText }) => {
  const { isLoading, data, isError, error, refetch } = useGetImages(searchText)
  useEffect(() => {
    refetch()
  }, [searchText])
  if (isLoading) {
    return (
      <section className="gallery-container">
        <h3>...Loading</h3>
      </section>
    )
  }
  if (error) {
    return (
      <section className="gallery-container">
        <h3>{error.message}</h3>
      </section>
    )
  }
  if (data.data.results.length < 1) {
    return (
      <section className="gallery-container">
        <h3>There are no Results...</h3>
      </section>
    )
  }
  return (
    <section className="gallery-container">
      <div className="gallery">
        {data.data.results.map(({ urls, id }) => {
          return (
            <img
              key={id}
              src={urls.regular}
              alt={`${searchText} img`}
              className="gallery-image"
            />
          )
        })}
      </div>
    </section>
  )
}
export default Gallery
