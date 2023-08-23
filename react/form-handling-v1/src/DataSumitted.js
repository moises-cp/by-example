export default function DataSubmitted({ data }) {
  if (!Object.keys(data).length) return null;

  return (
    <>
      <h3>Here's the data in a list format</h3>
      <ul>
        {Object.entries(data).map(([key, value], idx) => (
          <li key={idx}>
            {key}: {value}
          </li>
        ))}
      </ul>

      <h3>Here's the data in a JSON format</h3>
      {JSON.stringify(data)}
    </>
  );
}
