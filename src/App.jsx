import { Routes , Route } from 'react-router-dom'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Landing from './pages/Landing'
import WatchHistory from './pages/WatchHistory'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
       <Routes>
        <Route path='/' element={ <Landing/>}></Route>
        <Route path='/home' element={ <Home/>}/>
        <Route path='/watchHistory' element={ <WatchHistory/>} />
       </Routes>
      <Footer/>
    </>
  )
}

export default App
