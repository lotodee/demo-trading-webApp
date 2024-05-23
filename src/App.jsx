import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router , Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './components/pages/Homepage/Homepage'
import Text from './components/atoms/Text/Text'
import Exchange from './components/pages/Exchange/Exchange';
import RoqquHub from './components/pages/RoqquHub/RoqquHub';
import Wallet from './components/pages/Wallets/Wallet';
import AuthScreen from './components/pages/AuthScreen/AuthScreen';

function App() {
  
  return(
<>

<Router>
  <Routes>
  <Route path='/' element={<Homepage />} />
  <Route path='/exchange' element={<Exchange />} />
  <Route path='/roqquhub' element={<RoqquHub />} />
  <Route path='/wallets' element={<Wallet />} />
  <Route path='/auth' element={<AuthScreen />} />
  </Routes>
</Router>


</>
  )
}

export default App


