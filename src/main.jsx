import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './scss/styles.scss'
import 'aos/dist/aos.css';
import { HashRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
