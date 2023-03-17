import './App.css';
import Login from './login';
import Signin from './signin';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
     <Routes>
      {/* <Route path='/' element={<Login />}></Route> */}
      <Route path='/' element={<Signin />}></Route>
     </Routes>
    </div>
  );
}

export default App;
