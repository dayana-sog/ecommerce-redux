import React from 'react';

import Header from '../../components/Header';
import BannerHome from '../../components/BannerHome';
import TopCategory from '../../components/TopCategory';
import Catalog from '../../components/Catalog';

function Home() {
  return (
    <>
      <Header />
      <BannerHome />
      <TopCategory />
      <Catalog />
    </>
  );
}

export default Home;
