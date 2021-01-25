import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Packers')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogObj = { title, body, author}
    setIsPending(true)
    console.log(blogObj)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogObj)
    }).then(() => {
      console.log('New Blog Post Added')
      setIsPending(false)
      // history.go(-1);
      history.push('/')
    })
  }

  return (
    <>
      <div className="create">
        <h2>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
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
            <option value="Bears">Bears</option>
          </select>
          { !isPending && <button>Add Blog</button>}
          { isPending && <button disabled>Blog Submitting...</button>}

          <p>{title}</p>
          <p>{author}</p>
          <p>{body}</p>
        </form>
      </div>
    </>
  )
}

export default Create
