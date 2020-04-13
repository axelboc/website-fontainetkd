import '../styles/index.css';

import React from 'react';

import Adhesion from '../components/Adhesion';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Horaires from '../components/Horaires';
import Nav from '../components/Nav';
import Sections from '../components/Sections';
import SEO from '../components/SEO';

function IndexPage() {
  return (
    <>
      <SEO />
      <Banner />
      <Nav />
      <main>
        <Sections />
        <Horaires />
        <Adhesion />
      </main>
      <Footer />
    </>
  );
}

export default IndexPage;
