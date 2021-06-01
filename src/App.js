// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'

import Top from './Views/Top'
import Explorer from './Views/Explorer'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="app-container">
          <div className="contents-wrapper">
            <Route exact path='/' component={Top} />
            <Route path='/explorer/:genre' component={Explorer} />
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
