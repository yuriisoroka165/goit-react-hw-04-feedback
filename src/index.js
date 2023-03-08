import React from 'react';
import ReactDOM from 'react-dom/client';
// у файлі jsconfig.json є додаткові параметри які дозволяють робити імпорт коротшим відносно папки src
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
