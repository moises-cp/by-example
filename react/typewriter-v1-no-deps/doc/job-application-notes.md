- Company: Ramp
- Role: Senior Software Engineer | Frontend
- Location: New York, Miami, Remote
- Deparment: Engineering
- [Job Description](https://jobs.ashbyhq.com/ramp/4f9dd90d-f32e-46d5-b0c0-c69272b2f8d8)
- [Job Application](https://jobs.ashbyhq.com/ramp/4f9dd90d-f32e-46d5-b0c0-c69272b2f8d8/application)

---

## Senior Software Engineer | Frontend

### Description

- [Job Description](https://jobs.ashbyhq.com/ramp/4f9dd90d-f32e-46d5-b0c0-c69272b2f8d8)
- [Job application](https://jobs.ashbyhq.com/ramp/4f9dd90d-f32e-46d5-b0c0-c69272b2f8d8/application)

### Coding Challenge

1. Decode the base64 string below

```
aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==
```

2. Go to the URL below

```
https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/ramp-challenge-instructions/
```

3. Go to the URL below

```
https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge
```

4. Gather all the necessary HTML elements

```javascript
const nodes = document.querySelectorAll('code.ramp > div > span > i');
```

5. Create a bucket (array)

```javascript
const nodeValues = [];
```

6. Add the HTML elements values to the bucket

```javascript
nodes.forEach((node) => nodeValues.push(node.getAttribute('value')));
```

7. Display the bucket content to see if it has any values

```javascript
console.log(nodeValues);
```

8. Combine the bucket HTML values and display them in the console

```javascript
console.log(nodeValues.join(''));
```

9. Go to the URL that was displayed in the console.

```
https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636f6e
```

10. The flag is

```
conduit
```

11. Build a React app following the specification below:

    1. Create a CodeSandbox React application
    2. Make an HTTP request to URL obtained in step 2 to load the flag into a React component
       - Don't use any external libraries. Use browser APIs
       - Render a "Loading..." text while the request is ongoing
    3. Render the flag you loaded in step 4 with the following conditions:
       - Simulate a typewriter effect with a half second delay between each character. _Start showing nothing and then display characters one by one until the full string is displayed._
       - No style required
       - Render the flag a list, where each character is a list item
       - Animation should trigger after you load the flag
       - Animation should run only once
       - Use React APIs only. Don't use CSS or external libraries

12. The app can be inspected here: https://codesandbox.io/s/quirky-mcnulty-q7hsmv?file=/src/App.js:189-221

13. Note

- The app was purposely built to showcase the main points. If needed, I can refactor it further and make it more modular.
- The fetch request will be perform at component/page load time and it will not repeat on any other component rerender.
- Each list item will be render independently instead of rerendering all the `<ul><li></li></ul>` from the beginning everytime a new item needs to be added to the DOM.
- I am aware of the squigli line in the `useEffect()` dependencies > `[flag, currentIndex])`. The `data` dependency was not added on purpose.

14. Comment

- I enjoyed this exercise. Thank you!
