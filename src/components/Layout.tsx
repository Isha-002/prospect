import { Outlet } from 'react-router';
import Navbar from './Navbar';
import { invoke } from '@tauri-apps/api/core';

export default function Layout() {
  const invoke = window.__TAURI__.core.invoke;

  invoke('load_files')
  
  return (
    <main className='h-screen'>
      <Navbar />
      <Outlet />
    </main>
  );
}
