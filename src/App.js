import { Route, Routes } from 'react-router-dom';

import Home from '../src/pages/home/homepage.pages.jsx'
import Navigation from './component/navigation.component/navigation.component.jsx';
import SignIn from './pages/sign-in/signin.page.jsx';
import ShopPage from './pages/shop/shoppage.pages'
import CheckOutPage from './pages/checkout/checkout.pages.jsx';


const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path='shop/*' element={<ShopPage />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='check-out' element={<CheckOutPage />} />
        </Route>
    </Routes>
  )
}

export default App;
