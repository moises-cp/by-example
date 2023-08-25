function Child({ updateText }) {
  const randString = Math.random().toString().substr(2, 8);

  return (
    <>
      <h2>Child</h2>
      <button onClick={() => updateText(randString)}>
        Change Parent Value
      </button>
    </>
  );
}

export default Child;
