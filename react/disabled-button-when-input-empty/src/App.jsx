import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const disabled = value.length < 1;

  const updateValue = (e) => setValue(e.target.value);

  return (
    <>
      <h1>React</h1>
      <p>Disable the button when there's no text</p>

      <input onChange={updateValue} type="text" value={value} />

      <button disabled={disabled}>Submit</button>
    </>
  );
}

export default App;
