import './App.css'
import Cards from './components/Cards/Cards'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <h1>Practica M2</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cards/>}/>
          {/* <Route path='' component={}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
