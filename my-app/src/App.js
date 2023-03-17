import Welcome from './components/welcome';
import './App.css';
import Greet from './components/greet';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import Click from './components/functionclick';
import ClassClick from './components/classclick';
import Event from './components/eventbind';
import Parent from './components/parentcomponent';
import User from './components/usergreeting';
import List from './components/list';
import Stylesheet from './components/stylesheet';
import Inline from './components/inline';
import styles from './components/appStyles.module.css'
import './components/appstyles.css'
import Form from './components/form';
import Life from './components/lifecyclemoutingA';
import Fragment from './components/fragement';
import Focusinput from './components/focusinput';
import Portaldemo from './components/portaldemo';
import ComponentC from './components/ComponentC';
import { Userprovider } from './components/usercontext';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman" />
      <Greet />
      <Greet />
      <Greet />
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Hello></Hello>
      <Message />
      <Click />
      <ClassClick />
      <Event />
      <User />
      <List />
      <Stylesheet primary={true} />
      <h1 className='error'>ERROR</h1>
      <h1 className={styles.success}>SUCCESS</h1>
      <Inline />
      <Life />
      <Fragment />
      <Form />
      <Focusinput />
    <Portaldemo />
    <Counter />
    <Parent />
    <Userprovider value="maitri">

    <ComponentC />
    </Userprovider>*/}

    </div>
  );
}

export default App;
