import {Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import React, {Component} from 'react'
import Subscribe from './pages/Subscribe'
import ThankYou from './pages/ThankYou'
import PageShell from './components/PageShell'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={PageShell(Subscribe)}></Route>
          <Route path="/thanks" exact component={PageShell(ThankYou)}></Route>
        </div>
      </Router>
    );
  }
}
export default App
