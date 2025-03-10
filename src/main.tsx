import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Lessons from './components/Lessons';
import Quiz from './components/Quiz';
import Setting from './components/Setting';
import Seventh from './components/7th';
import Eighth from './components/8th';
import Ninth from './components/9th';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={<Dashboard />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="lessons"
            element={<Lessons />}
          >
            <Route
              path="7th"
              element={<Seventh />}
            />
            <Route
              path="8th"
              element={<Eighth />}
            />
            <Route
              path="9th"
              element={<Ninth />}
            />
          </Route>
          <Route
            path="/quiz"
            element={<Quiz />}
          />
          <Route
            path="/setting"
            element={<Setting />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
