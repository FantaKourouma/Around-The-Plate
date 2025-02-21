//import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';  // Global styles
import './meal-planner.css';  // Meal planner page styles
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
  </UserProvider>
);


document.getElementById('root')



