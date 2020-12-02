import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { global, indo, province } from './HWeb'

function App() {
  return (
    <Router>
      <div>
        <h1>
          COVID-19 tracker
        </h1>
        <nav>
          <table>
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
          </table>
        </nav>
      </div>
      <Switch>
        <Route path="/global">

        </Route>
        <Route path="/indo">

        </Route>
        <Route path="/province">

        </Route>
      </Switch>
    </Router>
  )
}

export default App;