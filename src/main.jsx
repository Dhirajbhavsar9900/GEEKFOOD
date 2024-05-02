import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Main2 from './Components/Main2'
import Footer from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <Main2 />
    <Footer />
  </React.StrictMode>,
)
