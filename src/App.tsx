import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './screens/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          {/*<Route path="blogs" element={<Blogs />} />*/}
          {/*<Route path="contact" element={<Contact />} */}
          {/*<Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
