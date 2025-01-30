import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { screen, fireEvent } from "@testing-library/dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

(async () => {
  const action = await screen.findByText('click me')
  // click the button twice
  fireEvent.click(action)
  await wait(50);
  fireEvent.click(action)
  await wait(50);
})()

function wait(duration = 100) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
