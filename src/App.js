import Navbar from "./Components/Navbar";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home, Discover, About, Signup, Login } from "./Routes/Routes";
import "./Assets/styles/css/main.css";

function ElementRoute() {
  const element = useRoutes([
    { path: "/*", element: <Home /> },
    { path: "/discover/*", element: <Discover /> },
    { path: "/about", element: <About /> },
    { path: "/signup", element: <Signup /> },
    { path: "/signin", element: <Login /> },
  ]);

  return element;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="App-body">
          <ElementRoute />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
