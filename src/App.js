import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import BlogDetails from './BlogDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//server launch command
//  npx json-server --watch data/db.json --port 8000

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs/:id" component={BlogDetails} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
