// import React from 'react'
// import Topbar from "./components/topbar/Topbar";
// import Homepage from "./pages/homepage/Homepage";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   const currentUser = true;
//   return (
//     <Router>
//       <Topbar />
//       <Routes>
//         <Route exact path="/">
//           <Homepage />
//         </Route>
//         <Route path="/posts">
//           <Homepage />
//         </Route>
//         <Route path="/register">
//           {currentUser ? <Homepage /> : <Register />}
//         </Route>
//         <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
//         <Route path="/post/:id">
//           <Single />
//         </Route>
//         <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
//         <Route path="/settings">
//           {currentUser ? <Settings /> : <Login />}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import Homepage from "./pages/homepage/Homepage";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/register" element={user ? <Homepage /> : <Register />} />
        <Route path="/login" element = {user ? <Homepage /> : <Login />} />
        <Route path="/write" element = {user ? <Write /> : <Register />} />
        <Route path="/settings" element = {user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element = { <Single /> } />
      </Routes>
    </Router>
  );
}

export default App;