import React from 'react';

import Header from '../../components/Header';
import BannerHome from '../../components/BannerHome';
import TopCategory from '../../components/TopCategory';
import Catalog from '../../components/Catalog';
import BannerBottom from '../../components/BannerBottom';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <BannerHome />
      <TopCategory />
      <Catalog />
      <BannerBottom />
      <Footer />
    </>
  );
}

export default Home;
