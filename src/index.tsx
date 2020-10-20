import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'

import './assets/index.css'
import './assets/tailwind.css'
import * as serviceWorker from './serviceWorker'
import Recoil from './components/Recoil'
import Redux from './components/Redux'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <div className="absolute w-full h-full flex">
      <RecoilRoot>
        <Recoil className="relative w-1/2 solid border-r-2" />
      </RecoilRoot>
      <Provider store={store}>
        <Redux className="relative w-1/2 solid border-l-2" />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
