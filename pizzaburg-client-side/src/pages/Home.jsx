// src/pages/Home.jsx
import Hero from '../components/home/Hero';
import MenuPreview from '../components/home/MenuPreview';
import OurStory from '../components/home/OurStory';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import BookTable from '../components/home/BookTable';
import LatestNews from '../components/home/LatestNews';

const Home = () => {
  return (
    <main>
      <Hero />
      <MenuPreview />
      <OurStory />
      <WhyChooseUs />
      <Testimonials />
      <BookTable />
      <LatestNews />
    </main>
  );
};

export default Home;