import React from 'react';
import NavBar from '../components/navbar-components/NavBar';
import HeroSection from '../components/general/HeroSection';
import Footer from '../components/Footer';
import TextContent from '../public/locale/pt-br/homePage.json';

function ProcessoSeletivo() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HeroSection backgroundImage="url(../images/ProcessoSeletivo/header.webp)" title="Processo Seletivo" subtitle="Você deseja ser parte do Zenith Aerospace?" />
      <Footer />
    </>
  );
}

export default ProcessoSeletivo;
