import React from 'react';
import OurStory from '../OurStory/OurStory';
import Features from '../Features/Features';
import Stats from '../Stats/Stats';
import Brands from '../Brands/Brands';
import Divider from '../Divider/Divider';
import Footer from '../Footer/Footer';

export default function About() {
  return (
    <>
      <Features />
      <Stats />
      <Brands />
      <Divider />
      <OurStory />
      <Footer />
    </>
  )
}
