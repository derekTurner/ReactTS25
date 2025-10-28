import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container pt-5">
        <Outlet />
      </div>
    </>
  );
}

export default App;