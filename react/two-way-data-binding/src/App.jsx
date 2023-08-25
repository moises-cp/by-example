import { useState } from 'react';

function App() {
  const [val, setVal] = useState('');

  const updateVal = (e) => setVal(e.target.value);

  return (
    <>
      <input
        onChange={updateVal}
        type="text"
        placeholder="Enter Text"
        value={val}
      />
      <p>{val}</p>
    </>
  );
}

export default App;
