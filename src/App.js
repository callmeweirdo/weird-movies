import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></ Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
