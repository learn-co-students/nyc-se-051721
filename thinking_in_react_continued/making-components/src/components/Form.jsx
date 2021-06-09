

function Form() {
  return (
    <div id="new-card">
      <form >
        <label htmlFor="card-title">Title</label>
        <input type="text" placeholder="Create Title" id="card-title" />
        <label htmlFor="card-content">Content</label>
        <input type="text" placeholder="Add Content" id="card-content" />
        <label htmlFor="card-image">Image</label>
        <input type="text" placeholder="Add Image URL" id="card-image" />
        <input type="submit" value="Create Card" />
      </form>
    </div>
  )
}


export default Form