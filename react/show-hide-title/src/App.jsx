import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show / Hide</button>

      {show && <h1>Page Title</h1>}

      <h2>Show and Hide the title by pressing the button above!</h2>
    </div>
  );
}

export default App;
