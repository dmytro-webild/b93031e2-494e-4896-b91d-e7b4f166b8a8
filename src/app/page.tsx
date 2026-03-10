"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeLargeTitles"
      background="grid"
      cardStyle="gradient-radial"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Layanan", id: "services" },
            { name: "Galeri", id: "gallery" },
            { name: "Ulasan", id: "reviews" },
            { name: "Lokasi", id: "location" },
            { name: "Booking", id: "booking" }
          ]}
          brandName="Zona Barbershop"
          bottomLeftText="Jl. Citoh Raya, Cimanggu 2"
          bottomRightText="0882-9073-904"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Barbershop Terpercaya di Cimanggu – Potongan Rapi, Pelayanan Ramah"
          description="Rating 4.9 dari 142+ pelanggan. Cukur rambut nyaman dengan minuman gratis, suasana bersih dan nyaman, serta barber berpengalaman."
          tag="⭐ 4.9 Rating • 142+ Reviews"
          buttons={[
            { text: "Hubungi Sekarang", href: "tel:0882-9073-904" },
            { text: "Booking Appointment" }
          ]}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-details-hairdresser-salon_23-2149205856.jpg?_wi=1",              imageAlt: "Zona Barbershop interior bersih dan nyaman"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/funny-little-boy-is-getting-trendy-haircut-from-expirienced-barber-fashionable-hairdressing-salon-firs-time_613910-21469.jpg",              imageAlt: "Barber profesional sedang memotong rambut dengan teknik rapi"
            }
          ]}
          rating={5}
          ratingText="Dipercaya oleh 142+ Pelanggan"
          background={{ variant: "grid" }}
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="why-choose-us" data-section="why-choose-us">
        <FeatureCardEight
          title="Mengapa Memilih Zona Barbershop?"
          description="Kami menyediakan pengalaman cukur rambut terbaik dengan layanan yang ramah dan suasana yang nyaman."
          tag="Kualitas Premium"
          tagIcon={Sparkles}
          features={[
            {
              id: 1,
              title: "Barber Berpengalaman",              description: "Tim barber profesional dengan pengalaman bertahun-tahun dalam memberikan potongan rambut yang rapi dan sesuai keinginan.",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-barbershop-concept_23-2148506190.jpg",              imageAlt: "barber working at station professional"
            },
            {
              id: 2,
              title: "Minuman & Suasana Nyaman",              description: "Gratis kopi, teh, dan air mineral. Tempat yang bersih, rapi, dan dirancang untuk kenyamanan maksimal Anda.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-details-hairdresser-salon_23-2149205856.jpg?_wi=2",              imageAlt: "modern barbershop interior design clean cozy"
            },
            {
              id: 3,
              title: "Hasil Potongan Rapi",              description: "Setiap potongan dihandle dengan presisi tinggi menggunakan teknik dan peralatan profesional terkini.",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-barber-shop-concept_23-2148506290.jpg?_wi=1",              imageAlt: "fade haircut professional barber modern style"
            },
            {
              id: 4,
              title: "Harga Terjangkau",              description: "Kualitas premium dengan harga yang sangat terjangkau. Potongan rambut mulai dari Rp50.000.",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-redhead-urban-traveller-male-sunglasses-holds-backpack-grey-background-studio_613910-1038.jpg?_wi=1",              imageAlt: "modern men hairstyle trendy cut"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <PricingCardNine
          title="Layanan Kami"
          description="Pilih layanan yang sesuai dengan kebutuhan Anda"
          tag="Layanan"
          plans={[
            {
              id: "basic",              title: "Potongan Rambut Standar",              price: "Rp50.000",              period: "/potong",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-barber-shop-concept_23-2148506290.jpg?_wi=2",              imageAlt: "fade haircut professional barber modern style",              button: { text: "Book Now" },
              features: [
                "Potongan rambut standar 30 menit",                "Konsultasi gaya dengan barber",                "Finishing sempurna"
              ]
            },
            {
              id: "pro",              title: "Potongan + Styling",              price: "Rp75.000",              period: "/sesi",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-redhead-urban-traveller-male-sunglasses-holds-backpack-grey-background-studio_613910-1038.jpg?_wi=2",              imageAlt: "modern men hairstyle trendy cut",              button: { text: "Book Now" },
              features: [
                "Potongan rambut premium 45 menit",                "Styling khusus sesuai tren",                "Konsultasi gaya lengkap"
              ]
            },
            {
              id: "premium",              title: "Potongan + Treatment",              price: "Rp100.000",              period: "/paket",              imageSrc: "http://img.b2bpic.net/free-photo/professional-barber-working-with-client-hairdressing-salon-styling-beard-with-trimmer_613910-5073.jpg?_wi=1",              imageAlt: "high fade haircut professional barber",              button: { text: "Book Now" },
              features: [
                "Potongan rambut eksklusif 60 menit",                "Treatment rambut premium",                "Styling profesional"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="gallery" data-section="gallery">
        <ProductCardFour
          title="Galeri Potong Rambut Kami"
          description="Lihat hasil karya barber profesional kami yang telah memuaskan ratusan pelanggan"
          tag="Portofolio"
          products={[
            {
              id: "1",              name: "Fade Cut Modern",              price: "Rp50.000",              variant: "Potongan Fade Modern",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-barber-shop-concept_23-2148506290.jpg?_wi=3",              imageAlt: "Fade Cut Modern - Potongan rapi dengan gradasi sempurna"
            },
            {
              id: "2",              name: "High Fade Classic",              price: "Rp50.000",              variant: "Potongan High Fade Klasik",              imageSrc: "http://img.b2bpic.net/free-photo/professional-barber-working-with-client-hairdressing-salon-styling-beard-with-trimmer_613910-5073.jpg?_wi=2",              imageAlt: "High Fade Classic - Potongan tinggi yang elegan"
            },
            {
              id: "3",              name: "Modern Style Trendy",              price: "Rp75.000",              variant: "Gaya Modern Tren",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-redhead-urban-traveller-male-sunglasses-holds-backpack-grey-background-studio_613910-1038.jpg?_wi=3",              imageAlt: "Modern Style Trendy - Potongan sesuai tren terkini"
            },
            {
              id: "4",              name: "Contemporary Cut",              price: "Rp75.000",              variant: "Potongan Kontemporer",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-charismatic-sensual-male-black-sweater-creative-personality_613910-476.jpg",              imageAlt: "Contemporary Cut - Gaya kontemporer dengan sentuhan modern"
            },
            {
              id: "5",              name: "Before & After",              price: "Transformasi",              variant: "Perubahan Luar Biasa",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-with-long-mustache-after-haircut-barbershop_618663-44.jpg",              imageAlt: "Before & After - Transformasi penampilan pelanggan"
            }
          ]}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTen
          title="Dipercaya oleh Pelanggan Kami"
          description="Lihat apa yang dikatakan lebih dari 142 pelanggan puas tentang Zona Barbershop"
          tag="Ulasan Pelanggan"
          testimonials={[
            {
              id: "1",              title: "Pelayanan Ramah & Nyaman",              quote: "Pelayanannya ramah, tempatnya nyaman, bahkan ada minuman gratis. Potongannya rapi banget. Saya sudah langganan di sini.",              name: "Bambang Sutrisno",              role: "Pelanggan Setia",              imageSrc: "http://img.b2bpic.net/free-photo/bearded-man-navy-t-shirt-happy-andpositive-pointing-with-index-fingers-standing-purple-wall_141793-82234.jpg",              imageAlt: "Bambang Sutrisno"
            },
            {
              id: "2",              title: "Hasil Selalu Sesuai Keinginan",              quote: "Sudah langganan disini bertahun-tahun. Hasil potongannya selalu sesuai dengan apa yang saya minta. Barbernya sangat profesional.",              name: "Ahmad Hidayat",              role: "Pelanggan Setia",              imageSrc: "http://img.b2bpic.net/free-photo/confident-adult-slavic-businessman-standing-with-crossed-arms-looking-side_141793-129905.jpg",              imageAlt: "Ahmad Hidayat"
            },
            {
              id: "3",              title: "Tempat Bersih & Nyaman",              quote: "Tempat barbernya sangat bersih dan nyaman. Peralatan lengkap dan modern. Barbernya berpengalaman dan hasilnya selalu memuaskan.",              name: "Rudi Hermawan",              role: "Pelanggan Regular",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-caucasian-man_641386-12.jpg",              imageAlt: "Rudi Hermawan"
            },
            {
              id: "4",              title: "Harga Terjangkau Kualitas Premium",              quote: "Harga sangat terjangkau untuk kualitas yang premium. Layanan cepat dan tanpa antre lama. Puas dengan hasil potongannya.",              name: "Doni Pratama",              role: "Pelanggan Baru",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-outdoors-portrait_158595-3565.jpg",              imageAlt: "Doni Pratama"
            },
            {
              id: "5",              title: "Rekomendasi Terbaik",              quote: "Saya merekomendasikan Zona Barbershop kepada semua teman saya. Tempat terbaik untuk cukur rambut di area Cimanggu.",              name: "Fikri Rahman",              role: "Brand Ambassador",              imageSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg",              imageAlt: "Fikri Rahman"
            },
            {
              id: "6",              title: "Kepuasan 100%",              quote: "Setiap kali ke Zona Barbershop, selalu puas. Barbernya ramah dan profesional. Minuman gratis juga menambah pengalaman positif.",              name: "Joko Prasetyo",              role: "Pelanggan Regular",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-businessman_107420-74362.jpg",              imageAlt: "Joko Prasetyo"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="location" data-section="location">
        <ContactCenter
          tag="📍 Lokasi Kami"
          title="Kunjungi Zona Barbershop 2 Citoh"
          description="Jl. Citoh Raya, Cimanggu 2, Kec. Cibungbulang, Kabupaten Bogor, Jawa Barat 16630 | Buka setiap hari sampai pukul 22:00"
          background={{ variant: "grid" }}
          useInvertedBackground={false}
          tagAnimation="slide-up"
          buttonText="Dapatkan Petunjuk"
        />
      </div>

      <div id="booking" data-section="booking">
        <ContactCenter
          tag="Booking Appointment"
          title="Siap Potong Rambut Hari Ini?"
          description="Pesan appointment Anda sekarang dan nikmati pengalaman cukur rambut terbaik. Hubungi kami atau gunakan form di bawah."
          background={{ variant: "grid" }}
          useInvertedBackground={false}
          tagAnimation="slide-up"
          buttonText="Booking Sekarang"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Zona Barbershop"
          leftLink={{ text: "Hubungi", href: "tel:0882-9073-904" }}
          rightLink={{ text: "WhatsApp", href: "https://wa.me/6288290739044" }}
        />
      </div>
    </ThemeProvider>
  );
}