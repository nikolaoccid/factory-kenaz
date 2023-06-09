import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Gallery } from './components/gallery/gallery';
import { Article } from './screens/article/article';
import { Category } from './screens/category/category';
import { Home } from './screens/home/home';
import ScrollToTop from './utils/scroll-to-top';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="news" element={<Category />} />
        <Route path="business" element={<Category />} />
        <Route path="sport" element={<Category />} />
        <Route path="life" element={<Category />} />
        <Route path="tech" element={<Category />} />
        <Route path="travel" element={<Category />} />
        <Route path="article/:article" element={<Article />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
