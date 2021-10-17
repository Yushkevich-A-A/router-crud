import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import NewPost from './Pages/NewPost/NewPost';

function App() {
  return (
      <div className="app-container">
        <Router>
          <Route exact path='/' component={HomePage}/>
          <Route path='/posts/new' component={NewPost}/>
          <Route path='/posts/:id' component={NewPost}/>
        </Router>
      </div>
  );
}

export default App;
