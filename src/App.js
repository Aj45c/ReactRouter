import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dash from './pages/Dashboard';
import Stock from './pages/Stock';
import Nav from './components/Nav';
import theData from './pages/stock-data';

function App(props) {
  return (
    <div className="App">
     <Nav />
      <Route exact path = '/' component={Home}/>

      <Route path = '/about' component={About}/>

      <Route path = '/stocks/:symbol'
            render = {props => <Stock {...props} theData = {theData} />}
        />

      <Route path = '/stocks'
            render = {props => <Dash {...props} theData= {theData} />}
      />
    </div>
  );
}

export default App;
