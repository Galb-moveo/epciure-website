import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
// import Card from './components/Card/AboutUs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <App />
    {/* <div className='card-container'>
      <Card />
    </div>
    <div>
    <Card />
    </div> */}
  </BrowserRouter>
);
