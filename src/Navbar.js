const Navbar = () => {

return (
    <nav className="navbar">
      <h1>Packers Fan Club</h1>
      <div className="links">
        <a href="/" style={{
            color: 'Yellow',
            backgroundColor: "Green",
            borderRadius: '8px'
        }}>Home</a>
        <a href="/create" style={{ 
          color: 'Yellow', 
          backgroundColor: 'Blue',
          borderRadius: '8px' 
        }}>New Blog</a>
      </div>
    </nav>
  );
    }
 
export default Navbar;