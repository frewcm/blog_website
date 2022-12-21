import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Write from "./pages/Write";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post" element={<PostPage />} />
              <Route
                path="/write"
                element={<ProtectedRoute Element={Write} />}
              />
              <Route path="/setting" element={<Settings />} />
              <Route path="/post/:postId" element={<PostPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
