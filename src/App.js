import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Favourites from './Pages/Favourites';
import RandomMeal from './Pages/RandomMeal';
import CategoryDetails from './Pages/CategoryDetails';
import AboutMe from './Pages/AboutMe';
import Sidebar from './Pages/SideBar';
import { MealsProvider } from './Pages/MealsContext';

function App() {
  return (
    <MealsProvider>
    <Router>
            <Sidebar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutme" element={<AboutMe/>} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/randommeal" element={<RandomMeal />} />
          <Route path="/categorydetail/:id" element={<CategoryDetails/>}/>
          
        </Routes>
      </div>
    </Router>
    </MealsProvider>
  );
}

export default App;
