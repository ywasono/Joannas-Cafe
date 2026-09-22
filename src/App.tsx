import Header from './components/Header';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import FoodMenu from './components/FoodMenu';
import DrinksMenu from './components/DrinksMenu';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F0] text-[#1A1A1A]">
      {/* Header & Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Photo Gallery Section (with generated dish photos) */}
        <PhotoGallery />

        {/* 3. Food Menu Section (no prices, includes Imgur food menu link) */}
        <FoodMenu />

        {/* 4. Coffee & Drinks Menu Section (no prices, includes Imgur drink menu link) */}
        <DrinksMenu />

        {/* 5. Location & Trading Hours (with exact hours, email admin@joannascafe.com.au, no phone) */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
