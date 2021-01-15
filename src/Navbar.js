import { Link } from 'react-router-dom'

const Navbar = () => {

return (
    <nav className="navbar">
      <h1>Packers Fan Club</h1>
      <div className="links">
        <Link 
            to="/" 
            style={{
            color: 'Yellow',
            backgroundColor: "Green",
            borderRadius: '8px'
        }}>
          Home</Link>
        <Link 
          to="/create" 
          style={{ 
          color: 'Yellow', 
          backgroundColor: 'Blue',
          borderRadius: '8px' 
        }}>
          New Blog</Link>
      </div>
    </nav>
  );
    }
 
export default Navbar;