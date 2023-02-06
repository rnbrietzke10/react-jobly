import './App.css';
import NavBar from './components/NavBar/NavBar';

import JoblyRoutes from './Routes';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <JoblyRoutes />
    </div>
  );
}

export default App;
