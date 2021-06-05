// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'

import Top from './Views/Top'
import Explorer from './Views/Explorer'
import Viewer from './Views/Viewer'
import Thanks from './Views/Question-Thanks'
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
            <Route path='/questions-thanks' component={Thanks} />
            <Route path='/articles/:articleId' component={() => <Viewer mode="articles" />} />
            <Route path='/contents/:articleId' component={() => <Viewer mode="contents" />} />
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
