import React, {useState} from 'react'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Packers')

  return (
    <>
      <div className="create">
        <h2>Create a New Post</h2>
        <form>
          <label>Blog Title</label>
          <input type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          />
          <label>Blog Body</label>
          <textarea 
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          />
          <label>Blog Author</label>
          <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Packers">Packers</option>
            <option value="Vikings">Vikings</option>
          </select>
          <button>Add Blog</button>
          <p>{title}</p>
          <p>{author}</p>
          <p>{body}</p>
        </form>
      </div>
    </>
  )
}

export default Create
