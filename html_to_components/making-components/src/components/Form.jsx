

function Form() {
  return (
    <div id="new-card">
      <form >
        <label for="card-title">Title</label>
        <input type="text" placeholder="Create Title" id="card-title" />
        <label for="card-content">Content</label>
        <input type="text" placeholder="Add Content" id="card-content" />
        <label for="card-image">Image</label>
        <input type="text" placeholder="Add Image URL" id="card-image" />
        <input type="submit" value="Create Card" />
      </form>
    </div>
  )
}


export default Form