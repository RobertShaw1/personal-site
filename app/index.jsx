//package dependicies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//local dependicies
import '../css/style.css';
// import NavButton from './components/NavButton.jsx';

const App = () => (
    <Router>
      <div>
        <div id="background">
        <h1 className="animated infinite flash">Under Construction</h1>
        </div>
        {/* <NavButton />
        <Route exact path="/rankings" component={Rankings} />
        <Route path="/categories" component={QOTD} />
        <Route exact path="/" component={Categories} /> */}
        {/* <Route component={NoMatch}/> */}
      </div>
    </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
