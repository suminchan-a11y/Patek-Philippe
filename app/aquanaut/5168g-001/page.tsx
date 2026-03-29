"use client";

import Nav from "../../components/Nav";
import ProductGallery from "../../components/ProductGallery";
import ProductInfo from "../../components/ProductInfo";
import ProductGalleryFull from "../../components/ProductGalleryFull";
import WatchCharacteristics from "../../components/WatchCharacteristics";
import ProductDescription from "../../components/ProductDescription";
import ProductGallery2 from "../../components/ProductGallery2";
import ProductHeroFull from "../../components/ProductHeroFull";
import AppointmentCTA from "../../components/AppointmentCTA";
import Footer from "../../components/Footer";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function ProductDetailPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Nav />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 0 : 8,
          backgroundColor: "#FFFFFF",
        }}
      >
        <ProductGallery />
        <ProductInfo />

        {isMobile ? (
          /* Mobile: 2 stacked images (600px each, gap 8) */
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <ProductGalleryFull
              image="/images/pdp-gallery-2.jpg"
              caption=""
              mobileObjectPosition="37% center"
            />
            <ProductGalleryFull
              image="/images/pdp-gallery-3.jpg"
              caption=""
              mobileObjectPosition="center center"
            />
          </div>
        ) : (
          <>
            <ProductGalleryFull
              image="/images/pdp-gallery-2.jpg"
              caption="Sunburst blue dial, horizontally embossed. Rose gold applied baton-style hour markers with white luminescent coating."
            />
            <ProductGalleryFull
              image="/images/pdp-gallery-3.jpg"
              caption={"Time-zone pushers integrated \ninto the case at 9 o\u2019clock."}
            />
          </>
        )}

        <div style={{ marginTop: isMobile ? 0 : -8 }}>
          <WatchCharacteristics />
        </div>
        <ProductDescription />
        <ProductGallery2 />
        <ProductHeroFull />
        <div style={{ marginTop: isMobile ? 0 : -8 }}>
          <AppointmentCTA />
        </div>
        <div style={{ marginTop: isMobile ? 0 : -8 }}>
          <Footer />
        </div>
      </main>
    </>
  );
}
