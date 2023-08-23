import { useState } from 'react';
import DataSubmitted from './DataSumitted';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const hasSubmittedData = Boolean(Object.keys(data).length);
  const [showError, setShowError] = useState(false);

  const setFieldErrorVisibility = (form) => {
    const validFields = form.querySelectorAll(
      'input:valid:not([type="submit"])'
    );
    const invalidFields = form.querySelectorAll(':invalid');

    invalidFields.forEach((inputEl) => {
      const parentEl = inputEl.parentNode.querySelector('.msg-error');
      parentEl.style.display = 'block';
    });

    validFields.forEach((inputEl) => {
      const parentEl = inputEl.parentNode.querySelector('.msg-error');
      parentEl.style.display = 'none';
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      setData({});
      setFieldErrorVisibility(form);
      setShowError(true);
      return;
    }

    const formData = new FormData(form);
    const submittedData = Object.fromEntries(formData);

    setData(submittedData);
    setShowError(false);
    setFieldErrorVisibility(form);
    form.reset();
  };

  return (
    <div className="container">
      <h1>Form Handling</h1>
      <h2>React Demo</h2>

      <form noValidate onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="Username">* Username:</label>
          <input
            id="Username"
            maxLength="15"
            minLength="4"
            name="Username"
            type="text"
            placeholder="username"
            required
          />
          <ul className="feedback-error msg-error">
            <li>Please enter a username.</li>
            <li>
              The username must be between four to fithteen characters long.
            </li>
          </ul>
        </div>
        <div className="field">
          <label htmlFor="FullName">* Full name:</label>
          <input
            id="FullName"
            maxLength="30"
            minLength="2"
            name="FullName"
            type="text"
            placeholder="First name Last name"
            required
          />
          <ul className="feedback-error msg-error">
            <li>Please enter your full name.</li>
            <li>The username must be between two to thirty characters long.</li>
          </ul>
        </div>
        <div className="field">
          <label htmlFor="Age">* Age:</label>
          <input
            id="Age"
            max="125"
            min="1"
            name="Age"
            type="number"
            placeholder="1-125"
            required
          />
          <ul className="feedback-error msg-error">
            <li>Please enter your age from.</li>
            <li>The age must be between one to hundred twenty-five.</li>
          </ul>
        </div>
        <div>
          {showError && (
            <div className="feedback-error global-error">
              Please correct the errors above.
            </div>
          )}
          <input type="submit" value="Submit" />
        </div>
      </form>

      {hasSubmittedData && (
        <section>
          <h2>Data Submitted</h2>
          <DataSubmitted data={data} />
        </section>
      )}

      <section>
        <p>
          This is a basic demonstration of how to setup a form in React using
          only pure JavaScript, HTML, and CSS. In this example, there are not
          third party libraries for the user interface, or data validation. We
          are using plain HTML input fields with their built-in validation,
          JavaScript to handle the form submission and displaying any error, and
          plain CSS to make it look a little bit better.
        </p>
        <p>
          After the form has been submitted without any error, the submitted
          data will be display below the "Submit" button.
        </p>
        <p>
          Even though this is a basic demo, the form has been setup to be
          dynamic within a certain category of input fields. Meaning, we can add
          or remove HTML input fields, without the need of updating the
          JavaScript.
        </p>
        <p>
          The are different approaches and libraries to do this. The goal here
          was to illustrate one simple way to accomplish it using only plain
          (vanilla) JavaScript, HTML, and CSS. If you are a developer and would
          like to share your thoughts, please let me know.
        </p>
      </section>
    </div>
  );
}

export default App;
