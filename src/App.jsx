import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import WorkFlow from "./components/WorkFlow";
import FadeText from './components/FadeText';
import Pricing from './components/Pricing';
import Footer from './components/Footer';


const App = () => {
  return (
    < >
    <div className="text-gray-600 bg-gray-900">
    <Navbar/>
    
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <FadeText />
<HeroSection/>
<FeatureSection/>
<WorkFlow/>
<Pricing/>
<Footer/>
    </div>
    
   </div>
    </>
  );
};
export default App;