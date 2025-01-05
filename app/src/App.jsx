import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainComponent  from './components/MainComponent';
import MostSearchedCompanies from "./components/MostSearchedCompanies/MostSearchedCompanies";
import ResultSearch from "./components/ResultSearch/ResultSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<MainComponent />}>
          <Route index element={<MostSearchedCompanies />} />
          <Route path="results" element={<ResultSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
