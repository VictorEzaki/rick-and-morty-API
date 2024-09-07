import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Nav from './components/Nav'

export default App

function App() {
  return (
    <>
      <Header />
      <main id='main'>
        <Nav />

      </main>
      <Footer />
    </>
  )
}