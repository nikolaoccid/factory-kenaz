import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Category } from './screens/category/category';
import { Home } from './screens/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="news" element={<Category />} />
        <Route path="business" element={<Category />} />
        <Route path="sport" element={<Category />} />
        <Route path="life" element={<Category />} />
        <Route path="tech" element={<Category />} />
        <Route path="travel" element={<Category />} />
        {/*<Route path="contact" element={<Contact />} */}
        {/*<Route path="*" element={<NoPage />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
