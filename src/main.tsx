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
import ChooseUnit from './components/lesson/ChooseUnit';
import WhatToRenderAfterChooseUnit from './components/lesson/WhatToRenderAfterChooseUnit';
import Explore from './components/Explore';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* main layout, renders navbar */}
        <Route element={<Layout />}>
        {/* renders dashboard when launching the app */}
          <Route
            path="/"
            element={<Dashboard />}
          />
          {/* lessons route */}
          <Route
            path="lessons"
            element={<Lessons />}
          >

        {/* Seventh Grade */}
        {/* The lesson zero thing looked good in my head - but not for now */}
        <Route path="7th" element={<Seventh />}>
          <Route path=":subject" element={<ChooseUnit units={8 + 1} lessonZero={false} />}>
            <Route path=':lesson' element={<WhatToRenderAfterChooseUnit/>} />
          </Route>
        </Route>

        {/* Eighth Grade */}
        <Route path="8th" element={<Eighth />}>
          <Route path=":subject" element={<ChooseUnit units={7 + 1} lessonZero={false}/>}>
            <Route path=':lesson' element={<WhatToRenderAfterChooseUnit/>} />
          </Route>
        </Route>

        {/* Ninth Grade */}
        <Route path="9th" element={<Ninth />}>
          <Route path=":subject" element={<ChooseUnit units={6 + 1} lessonZero={false}/>}>
            <Route path=':lesson' element={<WhatToRenderAfterChooseUnit/>} />
          </Route>
        </Route>

          </Route>

          {/* explore route */}
          <Route
            path="explore"
            element={<Explore />}
          />

          {/* quiz route */}
          <Route
            path="quiz"
            element={<Quiz />}
          />

          {/* setting route */}
          <Route
            path="setting"
            element={<Setting />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
