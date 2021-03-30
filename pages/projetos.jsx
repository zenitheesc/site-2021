import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import useTranslation from 'next-translate/useTranslation';
import ProjectTab from 'components/projects-components/ProjectTab';
import Footer from 'components/Footer';
import HeroSection from 'components/general/HeroSection';

function Projetos() {
  const { t } = useTranslation();
  const title = t('projetos:projetosHero.title');
  const subtitle = t('projetos:projetosHero.subtitle');
  return (
    <>
      <NavBar />
      <HeroSection
        backgroundImage="url(../images/Projetos/header.webp)"
        title={title}
        subtitle={subtitle}
      />
      <ProjectTab />
      <Footer />
    </>
  );
}

export function getServerSideProps() { return { props: {} }; }

export default Projetos;
