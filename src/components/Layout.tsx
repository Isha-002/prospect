import { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import { useStore } from './store';

export default function Layout() {
  const { _7th_dialogs, fetchDialogs } = useStore();

  // one is null all is null 🤓
  // save all dialogs in zustand store
  useEffect(() => {
    if (!_7th_dialogs) fetchDialogs()
  }, []);


  return (
    <main className="h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
}
