import '../styles/index.css';

import React from 'react';

import Adhesion from '../components/Adhesion';
import Banner from '../components/Banner';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Horaires from '../components/Horaires';
import Sections from '../components/Sections';

function IndexPage() {
  return (
    <>
      <Banner />
      <main>
        <Sections />
        <Horaires />
        <Adhesion />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default IndexPage;
