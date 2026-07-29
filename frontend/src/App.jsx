import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#F5F5F5_40%,#FFFDD0_100%)]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;// import { Route, Routes } from 'react-router';

// import HomePage from './pages/HomePage';
// import CreatePage from './pages/CreatePage';
// import NoteDetailPage from './pages/NoteDetailPage';


// const App = () => {
//   return (
//     <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#F5F5F5_40%,#FFFDD0_100%)]/>

        
//    <Routes>
//   {/* Home page route */}
//   <Route path="/" element={<HomePage />};
//     < Route path = "/create" element = {< CreatePage />};
// <Route path="/note/:id" element={<NoteDetailPage />};
// </ Routes>

// </div>
//   );
// };
// export default App;

// if u visit create page through path so through element i would like to the create page className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#F5F5F5_40%,#FFFDD0_100%)]"
