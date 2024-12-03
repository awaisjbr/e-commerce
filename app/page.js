import Banner from "@/components/Banner";
import Category from "@/components/category";
import Deals from "@/components/Deals";
import FashionDeals from "@/components/FashionDeals";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Category />
      <Banner />
      <FashionDeals />
      <Deals />
      <Footer />
    </>
  );
}
