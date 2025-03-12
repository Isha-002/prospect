import { Outlet } from 'react-router';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <main className='h-screen'>
      <Navbar />
      <Outlet />
    </main>
  );
}
