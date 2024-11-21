import React from 'react';
import NavBar from 'components/navbar-components/NavBar';
import useTranslation from 'next-translate/useTranslation';
import HeroSection from 'components/general/HeroSection';
//import ProjectTab from 'components/projects-components/ProjectTab';
import Footer from 'components/Footer';
import HeadTags from 'components/general/HeadTags';
import ProjectsTabNew from 'components/projects-components/projectsv2/ProjectsTabNew';

function Projetos() {
  const { t } = useTranslation();
  const title = t('projetos:projetoArray.title');
  const subtitle = t('projetos:projetoArray.subtitle');
  const array = t('projetos:projetoArray.array', { count: -1 }, { returnObjects: true });
  const metaTags = t('projetos:metaTags', { count: -1 }, { returnObjects: true });
  return (
    <>
      <HeadTags pageName={metaTags.pageName} title={metaTags.title} description={metaTags.description} pageTitle={metaTags.pageTitle} lang={metaTags.lang}/>
      <NavBar />
      <HeroSection
        backgroundImage="url(../../../../images/Projetos/Hero/GarateaE2018.webp)" 
        title={title}
        subtitle={subtitle}
        array={array}
      />
      <ProjectsTabNew />
      {/* <ProjectTab /> */}
      <Footer />
    </>
  );
}

export function getServerSideProps() { return { props: {} }; }

export default Projetos;
