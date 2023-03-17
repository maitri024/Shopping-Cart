import './App.css';
import Usestate from './components/usestate';
import Reducee from './components/usereducer';
import Formreducer from './components/Formreducer';
import Todoreducer from './components/Todoreducer';
import Useeffect from './components/useeffect';
import React from 'react';
import Useeffextlayout from './components/useeffextlayout';
import Useimperativehandle from './components/useimperativehandle';
import Usecontext from './components/usecontext';
import Usememo from './components/usememo';
import Usecallback from './components/usecallback';

function App() {
  return (
    <div className="App">
      {/* <Usestate /> 
      <Reducee />
      <Formreducer />
      <Todoreducer />
      <Useeffect />
      <Useeffextlayout />
      <Useimperativehandle />
      <Usecontext />
      <Usememo />*/}
      <Usecallback />
    </div>
  );
}

export default App;
