import React from 'react';

import BannerHome from '../../components/BannerHome';
import TopCategory from '../../components/TopCategory';
import Catalog from '../../components/Catalog';
import BannerBottom from '../../components/BannerBottom';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <BannerHome />
      <TopCategory />
      <Catalog />
      <BannerBottom />
      <Footer />
    </>
  );
}

export default Home;
