import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indo, Province } from './HWeb' 


function App () {
  return (
    <Router>
      <div>
        <h1>
          COVID-19 TRACKER
        </h1>
        <nav>
            <ul>
              <li>
                <Link to="/global">
                              Data global
                </Link>
              </li>
              <li>
                <Link to="/indo">
                                  Data Indonesia
                </Link>
              </li>
              <li>
                <Link to="/province">
                  Data Provinsi
                </Link>
              </li>
            </ul>
        </nav>     
      <Switch>
        <Route path="/global">

          <Global/>

        </Route>
        <Route path="/indo">

          <Indo/>

        </Route>
        <Route path="/province">

          <Province/>

        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App;