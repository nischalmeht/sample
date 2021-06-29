import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';

function App() {
  return (
   <Router>
     <div>
     <Switch>
          <Route path="/about" component={About}/>
          <Route path ="/contact" component={Contact}/>
          <Route path="/" component={Home}/>
           
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
