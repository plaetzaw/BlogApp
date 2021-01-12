import BlogList from "./BlogList";
import useFetch from './useFetch'

const Home = () => {
const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


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