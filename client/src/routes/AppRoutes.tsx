import { Routes, Route } from 'react-router-dom'
import RegistrationPage from '../pages/registration/registration'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import ProductById from '../pages/product/productById'
import ProductPage from '../pages/product/product'
import SizeGuide from '../pages/size-guide/size-guide'
import ScrollToTop from '../components/ScrollToTop'
import ShippingPolicyPage from '../pages/footer/ShippingPolicy'
import ReturnPolicy from '../pages/footer/return-policy/ReturnOfFunds'

const AppRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<ProductById />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/size-guide" element={<SizeGuide />} />
                <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
                <Route path="/return-policy" element={<ReturnPolicy />} />
            </Routes>
        </>
    )
}

export default AppRoutes