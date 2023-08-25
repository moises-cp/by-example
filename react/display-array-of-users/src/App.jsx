const users = [
  { name: 'John Doe', id: 1 },
  { name: 'Jane Doe', id: 2 },
  { name: 'Billy Doe', id: 3 },
];

const userNames = users.map((user) => <li key={user.id}>{user.name}</li>);

function App() {
  return (
    <>
      <h1>User names</h1>
      <ul>{userNames}</ul>
    </>
  );
}

export default App;
