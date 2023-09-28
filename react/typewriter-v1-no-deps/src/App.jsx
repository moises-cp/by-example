import React, { useEffect, useState } from 'react';

/**
 * Notes
 * 1. Decode the following base64:  aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==
 * 2. Went to https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/ramp-challenge-instructions/
 * 3. Went to https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge
 * 4. Get all the HTML needed in the web browser console > "const nodes = document.querySelectorAll('code.ramp > div > span > i')"
 * 5. const nodeValues = []
 * 6. nodes.forEach(node => nodeValues.push(node.getAttribute('value')))
 * 7. console.log(nodeValues.join(''))
 * 8. https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636f6e
 */

const getData = async () => {
  const appName = 'wgg522pwivhvi5gqsn675gth3q0otdja';
  const host = 'lambda-url.us-east-1.on.aws';
  const id = '636f6e';
  const url = `https://${appName}.${host}/${id}`;

  const data = await fetch(url)
    .then((resp) => resp.text())
    .catch((e) => console.error(`Error: ${e}`));
  return data;
};

export function App() {
  const [flag, setFlag] = useState('');
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsloading] = useState(true);
  const displayLetters = !isLoading && data.length > 0;

  const delayTimeMS = 500;

  useEffect(() => {
    (async () => {
      const data = await getData();
      setFlag(data);
      setIsloading(false);
    })();
  }, []);

  useEffect(() => {
    if (
      typeof flag !== 'string' ||
      flag.length < 1 ||
      currentIndex >= flag.length
    )
      return;

    const timeout = setTimeout(() => {
      const newArr = [
        ...data,
        { id: self.crypto.randomUUID(), letter: flag[currentIndex] },
      ];
      setData(newArr);
      setCurrentIndex(currentIndex + 1);
    }, delayTimeMS);
    return () => clearTimeout(timeout);
  }, [flag, currentIndex]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {displayLetters &&
        data.map((char) => <li key={char.id}>{char.letter}</li>)}
    </div>
  );
}

export default App;
