const SearchForm = ({getImages}) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const formDataObject = Object.fromEntries(formData.entries())
    getImages(formDataObject.text || '')
    console.log(formDataObject.text)
  }
  return (
    <section className="form-container">
      <div className="search-form">
        <h1>unsplash images</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" id="text" placeholder="cat" />
          <button type="submit" className="btn">
            search
          </button>
        </form>
      </div>
    </section>
  )
}
export default SearchForm
