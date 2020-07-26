import '../styles/index.css';

import React from 'react';

import Adhesion from '../components/Adhesion';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Horaires from '../components/Horaires';
import Meta from '../components/Meta';
import Nav from '../components/Nav';
import Sections from '../components/Sections';

function IndexPage() {
  return (
    <>
      <Meta />
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
