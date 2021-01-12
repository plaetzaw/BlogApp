import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {


  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  //could just be done as useState([])


//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
//   }

  useEffect(()=>{
    setTimeout(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
        if(!res.ok){
             throw Error('Could not fetch data for resouce, what are u doing?')
        }
        return res.json()
    })
    .then((data)=>{
        setBlogs(data);
        setIsPending(false);
        setError(null)
    })
    .catch(err => {
    setIsPending(false)
    setError(err.message);
    })
}, 1000)
  }, []);

  return (
    <div className="home">
        {error && <div><h1>{error}</h1></div>}
        { isPending && <div><h2>Data is Loading...</h2></div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
      {/* <BlogList blogs={blogs.filter(blog => blog.author === 'Packers')} title="Packers's Blogs" /> */}
  
    </div>
  );
}
 
export default Home;