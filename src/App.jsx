
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Singin from './pages/singin'
import Singup from './pages/Singup'
import Header from './Components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/singin' element={<Singin />} />
          <Route path='/singup' element={<Singup/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
