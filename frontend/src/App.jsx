import { Route, Routes } from 'react-router';

import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';


const App = () => {
  return (

     <div className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 10%, #ffffff 0%, #f5dcdc 35%, #c1121f 90%, #780000 100%)",
        }}
      />
  
    
    <Routes> //return routes
      <Route path="/" element={<HomePage />} /> //home page route
      <Route path="/create" element={<CreatePage />} /> //create page route
      <Route path="/note/:id" element={<NoteDetailPage />} /> //note detail page route
    </Routes>

  </div>
  );
};
export default App;

// if u visit create page through path so through element i would like to the create page className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#F5F5F5_40%,#FFFDD0_100%)]"
