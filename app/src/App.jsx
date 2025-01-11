import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainComponent  from './components/MainComponent';
import MostSearchedCompanies from "./components/MostSearchedCompanies/MostSearchedCompanies";
import ResultSearch from "./components/ResultSearch/ResultSearch";
import Company from './components/Company/Company';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<MainComponent />}>
          <Route index element={<MostSearchedCompanies />} />
          <Route path="results" element={<ResultSearch />} />
          <Route path="company" element={<Company />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
