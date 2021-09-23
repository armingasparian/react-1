import './App.scss';
import { useState } from 'react';
import './list/list.scss';
import Tomei from './Tomei';
import Form from './Form';
import Lesstext from './Lesstext';
import List from './list/List';
import GetCount from './GetCount';
import HookExample from './HookExample';
import UseContext from './UseContext';
import ComponentLifecycle  from './CompenentLifecycle';
import Challenges from './somethingNew/Challenges';

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <Tomei />
      <Form />
      <Lesstext text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum."
          max={40}/>
      <List />
      <GetCount />
      <HookExample />
      <UseContext />
      <div className="show-btn">
        <button onClick={() => setShow(!show)}>Click me</button>
      </div>
      
      {
        show === true ?  <ComponentLifecycle /> : null
      }
       
      <Challenges />
    </div>
  );
}

export default App;