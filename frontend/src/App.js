import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import NewPost from './Pages/NewPost/NewPost';
import ProviderPosts from './Providers/ProviderPosts/ProviderPosts';
import PagePost from './Pages/PagePost/PagePost';
import EditPost from './Pages/EditPost/EditPost';

function App() {

  return (
      <ProviderPosts>
        <div className="app-container">
          <Router>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/posts/new' component={NewPost}/>
              <Route path='/posts/edit/:id' component={EditPost}/>
              <Route path='/posts/:id' component={PagePost}/>
            </Switch>
          </Router>
        </div>
      </ProviderPosts>
  );
}

export default App;
