import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./components/pages/Login"
import Layout from "./components/common/Layout"
import DashBoard from "./components/pages/DashBoard"
import ViewUser from "./components/pages/user/ViewUser"
import ContactEnquiry from "./components/pages/enquiry/ContactEnquiry"
import Newslatter from "./components/pages/enquiry/Newslatter"
import AddColor from "./components/pages/color/AddColor"
import ViewColor from "./components/pages/color/ViewColor"
import AddMaterial from "./components/pages/material/AddMaterial"
import ViewMaterial from "./components/pages/material/ViewMaterial"
import AddCatagory from "./components/pages/parentcatagory/AddCatagory"
import ViewCatagory from "./components/pages/parentcatagory/ViewCatagory"
import AddSubCatagorys from "./components/pages/sub catagorys/AddSubCatagorys"
import ViewSubCatagorys from "./components/pages/sub catagorys/ViewSubCatagorys"
import AddSubSubCatagorys from "./components/pages/sub sub catagorys/AddSubSubCatagorys"
import ViewSubSubCatagorys from "./components/pages/sub sub catagorys/ViewSubSubCatagorys"
import AddProduct from "./components/pages/products/AddProduct"
import ViewProduct from "./components/pages/products/ViewProduct"
import AddWhyChooseUs from "./components/pages/why choose us/AddWhyChooseUs"
import ViewWhyChooseUs from "./components/pages/why choose us/ViewWhyChooseUs"
import Orders from "./components/pages/orders/Orders"
import AddSlider from "./components/pages/sliders/AddSlider"
import ViewSlider from "./components/pages/sliders/ViewSlider"
import AddCountry from "./components/pages/country/AddCountry"
import ViewCountry from "./components/pages/country/ViewCountry"
import AddTestimonil from "./components/pages/testimonial/AddTestimonil"
import ViewTestimonial from "./components/pages/testimonial/ViewTestimonial"
import AddFaqs from "./components/pages/faqs/AddFaqs"
import ViewFaqs from "./components/pages/faqs/ViewFaqs"
import TermsConditions from "./components/pages/term & condition/TermsConditions"
import Profile from "./components/pages/Profile"
import CompanyProfile from "./components/pages/CompanyProfile"



function App() {
  

  return (
    <>
      
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="user">
        <Route path="viewuser" element={<ViewUser />} />
      </Route>
      <Route path="enquiry">
        <Route path="contactenquiry" element={<ContactEnquiry />} />
        <Route path="newslatter" element={<Newslatter />} />
      </Route>
      <Route path="color">
        <Route path="addcolor" element={<AddColor />} />
        <Route path="/color/edit/:id" element={<AddColor />} />
        <Route path="viewcolor" element={<ViewColor />} />
      </Route>
      <Route path="material">
        <Route path="addmaterial" element={<AddMaterial />} />
        <Route path="/material/edit/:id" element={<AddMaterial />} />
        <Route path="viewmaterial" element={<ViewMaterial />} />
      </Route>
      <Route path="parentcatagory">
        <Route path="addcatagory" element={<AddCatagory />} />
        <Route path="/parentcatagory/edit/:id" element={<AddCatagory />} />
        <Route path="viewcatagory" element={<ViewCatagory />} />
      </Route>
      <Route path="subcatagory">
        <Route path="addcatagory" element={<AddSubCatagorys />} />
        <Route path="viewcatagory" element={<ViewSubCatagorys />} />
      </Route>
      <Route path="subsubcatagory">
        <Route path="addsubsubcatagory" element={<AddSubSubCatagorys />} />
        <Route path="viewsubsubcatagory" element={<ViewSubSubCatagorys />} />
      </Route>
      <Route path="products">
        <Route path="addproducts" element={<AddProduct />} />
        <Route path="viewproducts" element={<ViewProduct />} />
      </Route>
      <Route path="whychooseus">
        <Route path="addwhychooseus" element={<AddWhyChooseUs />} />
        <Route path="viewwhychooseus" element={<ViewWhyChooseUs />} />
      </Route>
      <Route path="orders">
        <Route path="orders" element={<Orders />} />
      </Route>
      
       <Route path="sliders">
        <Route path="addslider" element={<AddSlider />} />
        <Route path="viewslider" element={<ViewSlider />} />
      </Route>
       <Route path="country">
        <Route path="addcountry" element={<AddCountry />} />
        <Route path="/country/edit/:id" element={<AddCountry />} />
        <Route path="viewcountry" element={<ViewCountry />} />
      </Route>
       <Route path="testimonial">
        <Route path="addtestimonial" element={<AddTestimonil />} />
        <Route path="viewtestimonial" element={<ViewTestimonial />} />
      </Route>
       <Route path="faqs">
        <Route path="addfaqs" element={<AddFaqs />} />
        <Route path="/faqs/edit/:id" element={<AddFaqs />} />
        <Route path="viewfaqs" element={<ViewFaqs />} />
      </Route>
       <Route path="terms&conditions">
        <Route path="terms&conditions" element={<TermsConditions />} />
      </Route>
       <Route path="profile">
        <Route path="profile" element={<Profile />} />
      </Route>
       <Route path="companyprofile">
        <Route path="companyprofile" element={<CompanyProfile />} />
      </Route>
      </Route>
      <Route path="/" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
