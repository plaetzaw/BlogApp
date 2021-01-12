import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {


  const [blogs, setBlogs] = useState([
    { title: 'Aaron Rodgers is a bad man', body: 'Who is your Daddy and what does he do?', author: 'Packers', id: 1 },
    { title: 'Davantae Adams is a baller', body: 'I`ll be back baybee!"', author: 'NFCN', id: 2 },
    { title: 'Aaron Jones is a tank', body: 'I like Turtles, I like them a lot', author: 'Packers', id: 3 }
  ])

  const [name, setName] = useState("Packers")

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(()=>{
    console.log('use effect ran')
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"  handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter(blog => blog.author === 'Packers')} title="Packers's Blogs" handleDelete={handleDelete} />
      <button onClick={()=> setName("Vikings")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
}
 
export default Home;