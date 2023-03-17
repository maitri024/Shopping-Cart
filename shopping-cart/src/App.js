import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardsdetail from './features/cardsdetail';
import Header from './features/header';
import Cards from './features/cards'
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Cards />}></Route>
        <Route path='/cart/:id' element={<Cardsdetail />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
