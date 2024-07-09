import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
// import Footer from './components/Footer/Footer.tsx'
// import Header from './components/Header/Header.tsx'
import Categories from './pages/Categories/Categories.tsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Categories />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
