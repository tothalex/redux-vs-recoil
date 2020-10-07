import React from 'react'
import ReactDOM from 'react-dom'

import './assets/index.css'
import './assets/tailwind.css'
import * as serviceWorker from './serviceWorker'
import Recoil from './components/Recoil'
import Redux from './components/Redux'

ReactDOM.render(
  <React.StrictMode>
    <div className="absolute w-full h-full flex">
      <Recoil className="w-1/2" />
      <Redux className="w-1/2" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
