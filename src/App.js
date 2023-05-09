import './App.css';
import { Navbar } from './components/Navbar'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from "./pages/HomePage"
import { ContactPage } from "./pages/ContactPage"
import {Routes, Route, Outlet} from "react-router-dom"
import { ArticlePage } from './pages/ArticlesPage';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Absolute pathing */}
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/about/contact" element={<ContactPage />} /> */}

        {/* Relative pathing */}

        <Route path="about" element={<Outlet />}>
          <Route index element={<AboutPage/>} />
          <Route path='contact' element={<ContactPage />} />
        </Route>

        <Route path="/articles/:id/media/:photoId" element={<ArticlePage/>}/>

      </Routes>

      <h6>Footer goes here.</h6>
    </div>
  );
}

export default App;
