import './App.css';
import { DataContextProvider } from './context/DataContext';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import CategoriePage from './pages/Categorie/CategoriePage';
import AddCategorie from './components/AddCategorie/AddCategorie';
import AddCategorieCard from './components/AddCategorieCard/AddCategorieCard';

function App() {
  return (

    <div className="App">
      <DataContextProvider>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/categorie/:name' element={<CategoriePage />}></Route>
        </Routes>
      </DataContextProvider>
    </div>
  )
}

export default App;
