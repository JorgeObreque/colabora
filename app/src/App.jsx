import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainComponent  from '../components/MainComponent'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<MainComponent />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
