import './App.css';
import Home from './page/Home';
import RestaurantList from './page/RestaurantList';
import ReviewList from './page/ReviewList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mypage from './page/Mypage';
import MemberProvider from './context/MemberContext';
import Login from './page/Login';
import BusinessPage from './page/BusinessPage';
import MyInfo from './components/Mypage/MyInfo';
function App() {
  return (
    <MemberProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/RestaurantList" element={<RestaurantList/>}/>
        <Route path="/ReviewList" element={<ReviewList/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Mypage' element={<Mypage/>}/>
        <Route path='/BusinessPage' element={<BusinessPage/>}/>
      </Routes>
    </Router>
    </MemberProvider>
  );
}

export default App;
