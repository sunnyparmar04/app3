import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyMenu from './MyMenu';
import Home from './home'
import Category from './Category';
import EditCategory from './EditCategory';
import InsertCategory from './insert_category';
import Product from './product';
import EditProduct  from './editproduct';
import InsertProduct from './insertproduct';
import Users from './user';
import Order from './order';
import OrderDetail from './orders_detail';
import PritOrder from './print-order';
import AdminLogin from './adminLogin';
import AdminLogout from './adminLogout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Myrouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<MyMenu />}>
          <Route path='/home' element={<Home />} />
          <Route path='/Category' element={<Category />} />
          <Route path='/EditCategory' element={<EditCategory />} />
          <Route path='/insert_category' element={<InsertCategory />} />
          <Route path='/product' element={<Product />} />
          <Route path='/editproduct' element={<EditProduct />}/>
          <Route path='/insertproduct' element={<InsertProduct />}/>
          <Route path='/user' element={<Users />}/>
          <Route path='/order' element={<Order />}/>
          <Route path='/orders_detail/:orderid' element={<OrderDetail />}/>
          <Route path='/adminLogout' element={<AdminLogout />}/>
        </Route>
          <Route path='/print-order' element={<PritOrder />}/>
          <Route path='/adminLogin' element={<AdminLogin />}/>          
      </Routes>
    </BrowserRouter>
  );
}
root.render(<Myrouter />);

