import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import BodyComponent from './components/Body'
import { Provider } from 'react-redux';

import appStore from './utilis/appStore';

function App() {

  return (
    <div className="App">
      <Provider store={appStore}>
          <BodyComponent> </BodyComponent>
      </Provider>
    </div>
  )
}

export default App
