// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'

import Top from './Views/Top'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="contents-wrapper">
          <Route exact path='/' component={Top} />
        </div>
      </Router>
    </div>
  );
}

export default App;
