import './App.css';
import Home from './page/Home';
import RestaurantList from './page/RestaurantList';
import ReviewList from './page/ReviewList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mypage from './page/Mypage';
import MemberProvider from './context/MemberContext';
import Login from './page/Login';
function App() {
  return (
    <MemberProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/RestaurantList" element={<RestaurantList/>}/>
        <Route path="/ReviewList" element={<ReviewList/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Home/Mypage' element={<Mypage/>}/>
      </Routes>
    </Router>
    </MemberProvider>
  );
}

export default App;
