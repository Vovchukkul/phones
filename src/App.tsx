import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div data-cy="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
