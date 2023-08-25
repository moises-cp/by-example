import { useState } from 'react';
import Child from './Child';

function App() {
  const [value, setValue] = useState('I need to be updated from my child');

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <h2>Parent</h2>
        <div className="box-wrapper">{value}</div>
      </div>
      <div className="wrapper">
        <Child updateText={setValue} />
      </div>
    </>
  );
}

export default App;
