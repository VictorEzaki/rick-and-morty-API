import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ApiRickAndMorty from './pages/ApiRickAndMorty'

export default App

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ApiRickAndMorty' element={<ApiRickAndMorty />} />
      </Routes>
    </>
  )
}