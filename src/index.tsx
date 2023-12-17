import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AppProvider from './context/AppContext'

import './index.css'

// React 17 is installed. I deactivate the eslint notification for this line that warns me that the render function is deprecated since react 18
/* eslint-disable react/no-deprecated */
ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('root') as HTMLElement
)
