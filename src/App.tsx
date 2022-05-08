import { Route, Routes } from 'solid-app-router';
import { Component } from 'solid-js';
import Navbar from './components/Navbar';
import All from './pages/All';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Plugins from './pages/Plugins';

const App: Component = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='plugins' element={<Plugins />} />
      <Route path='all' element={<All />} />
      <Route path='/*all' element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
