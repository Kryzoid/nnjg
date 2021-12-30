import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import Layout from './components/layout';
import Oops from './pages/oops';

const Home = React.lazy(() => import('./pages/home'));
const Forum = React.lazy(() => import('./pages/forum'));
const Thread = React.lazy(() => import('./pages/thread'));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<Spin size="large"/>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="forums/:forumName"
          element={
            <React.Suspense fallback={<Spin size="large"/>}>
              <Forum />
            </React.Suspense>
          }
        />
        <Route
          path="forums/:forumName/:threadId"
          element={
            <React.Suspense fallback={<Spin size="large"/>}>
              <Thread />
            </React.Suspense>
          }
        />
        <Route path="*" element={<Oops message="404: Page not found"/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App;
