import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/common/header/Header';
import Footer from './component/common/footer/Footer';
import ClassesAsmbel from './component/classes/ClassesAsmbel';
import ScheduleAsmbel from './component/schedule/ScheduleAsmbel';
import ContactAsmbel from './component/contact/ContactAsmbel';
import FirstTimerAsmbel from './component/firsttimer/FirstTimerAsmbel';
import PersonalTrainerAsmbel from './component/personaltrainer/PersonalTrainerAsmbel';
import TrainerAsmbel from './component/trainer/TrainerAsmbel';
import BookClassAsmbel from './component/bookclass/BookClassAsmbel';
// import UserLogin from './component/user/UserLogin';
import MembershipAssembel from './component/membership/MembershipAssembel';

import TopGiftAsmbel from './component/giftcard/TopGiftAsmbel';
import TeacherView from './component/trainer/TeacherView';
import ClassView from './component/classes/ClassView';
import ShopNow from './component/giftcard/ShopNow';
import Cart from './component/cart/Cart';
import Checkout from './component/cart/Checkout';
import ViewBag from './component/cart/ViewBag';
import EgiftShopnow from './component/giftcard/EgiftShopnow';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/classes" element={<ClassesAsmbel />} />
        <Route path="/classview/:id" element={<ClassView />} /> 
        <Route path="/schedule" element={<ScheduleAsmbel />} />
        <Route path="/contact" element={<ContactAsmbel />} />
        <Route path="/firsttimers" element={<FirstTimerAsmbel />} />
        <Route path="/personaltraining" element={<PersonalTrainerAsmbel />} />
        <Route path="/trainers" element={<TrainerAsmbel />} />
        <Route path="/teacherview/:id" element={<TeacherView />} /> 
        {/* <Route path="/user" element={<UserLogin />} /> */}
        <Route path="/buygift" element={<TopGiftAsmbel />} />
        <Route path="/shopnow" element={<ShopNow />} />
        <Route path="/egiftshopnow" element={<EgiftShopnow />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/viewbag" element={<ViewBag />} />
        <Route path="/bookclass" element={<BookClassAsmbel />} />
        <Route path="/membership" element={<MembershipAssembel />} />
        <Route path="finalgymproject/" element={<FirstTimerAsmbel/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;






//    