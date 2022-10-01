// import {
//   createBrowserRouter,
//   RouterProvider,
//   // Route,
//   // Outlet,
// } from "react-router-dom";
// import Register from "./pages/register/Register";
// import Login from "./pages/login/Login";
// import Write from "./pages/write/Write";
// import Home from "./pages/home/Home";
// import SinglePage from "./pages/singlepage/SinglePage";

// import TopBar from './components/topbar/TopBar';
// import Settings from './pages/setting/Settings';

// const Layout = () => {
//   return (
//     <>
//       <TopBar />
//       <Home />

//     </>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//     ],
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/settings",
//     element: <Settings />,
//   },
//   {
//     path: "/write",
//     element: <Write />,
//   },
//   {
//     path: "/post/:id",
//     element: <SinglePage />,
//   },
// ]);

// function App() {
//   return (
//     <div className="app">
//       <div className="container">
//         <RouterProvider router={router} />
//       </div>
//     </div>
//   );
// }

// export default App;





import TaBar from "./components/topbar/TopBar"
import SinglePage from './pages/singlepage/SinglePage';
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/setting/Settings";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>

      <TaBar />
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/register" element={user ? <Home /> : <Register />} ></Route>
        <Route path="/login" element={user ? <Home /> : <Login />} ></Route>
        <Route path="/write" element={user ? <Write /> : <Register />} ></Route>
        <Route path="/settings" element={user ? <Settings /> : <Register />} ></Route>
        <Route path="/post/:postId" element={<SinglePage />} ></Route>
      </Routes>

    </Router>
  );
}

export default App;