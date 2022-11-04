import ReactDOM from 'react-dom/client';
import './index.scss';
import { Main } from './pages/main/main.component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Main />
);
