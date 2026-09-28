import { getProducts } from "../api services/home.api";
import BannerSlider from "./components/home-components/BannerSlider";
import Collection from "./components/home-components/Collection";
import Newsletter from "./components/home-components/Newsletter";
import Products from "./components/home-components/Products";
import ProductTab from "./components/home-components/ProductTab";
import ServiceSection from "./components/home-components/ServiceSection";
import Testimonial from "./components/home-components/Testimonial";
import TrandingBanner from "./components/home-components/TrandingBanner";
export const metadata = {};

export default async function Home() {
  // API Services Call
  let data=await getProducts()
  console.log(data)


  metadata.title="Online Furniture in india"
  metadata.description="Online Furniture Provides Quality Furniture"
  return (
    <section>
      <BannerSlider/>
      {
        data && <ProductTab PruductList={data}/>
      }
      <Collection/>
      <Products/>
      <TrandingBanner/>
      <ServiceSection/>
      <Testimonial/>
      <Newsletter/>
    </section>
  );
}


