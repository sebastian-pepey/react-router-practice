import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

const Home = () => <h1>Home</h1>

const SearchPage = () => <h1>Search Page</h1>

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pepichollo 💵</h1>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/search-page'>Search Page</a></li>
          </ul>
        </nav>
      </header>
      
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/search-page' element = {<SearchPage />} />
      </Routes>
    </div>
  )
}

export default App
