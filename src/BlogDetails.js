import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {
const {id} = useParams();
const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)

  return (
    <div className="blog-details">
        { isPending && <div><h2>Loading...</h2></div>}
        {error && <div><h2>{error}</h2></div>}
        { blog &&
        <article>
            <h1>{blog.title}</h1>
            <p>Written by: {blog.author}</p>
            <div>{blog.body}</div>
        </article>
        }

    </div>
  )
}

export default BlogDetails
