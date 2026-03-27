"use client";

import Nav from "../../components/Nav";
import ProductGallery from "../../components/ProductGallery";
import ProductInfo from "../../components/ProductInfo";
import ProductDescription from "../../components/ProductDescription";
import ProductGallery2 from "../../components/ProductGallery2";
import AppointmentCTA from "../../components/AppointmentCTA";
import Footer from "../../components/Footer";

export default function ProductDetailPage() {
  return (
    <>
      <Nav />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          backgroundColor: "#FFFFFF",
        }}
      >
        <ProductGallery />
        <ProductInfo />
        <ProductDescription />
        <ProductGallery2 />
        <AppointmentCTA />
        <Footer />
      </main>
    </>
  );
}
