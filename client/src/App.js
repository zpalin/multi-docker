import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from "./OtherPage"
import Fib from './Fib'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="App-title">FibCalc 2020</h1>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/otherpage">Other Page</Link>
          <br/>
        </header>
        <div>
          <Route exact path="/" component={Fib}/>
          <Route path="/otherpage" component={OtherPage}/>
        </div>
      </div>
    </Router>
  )
}

export default App
