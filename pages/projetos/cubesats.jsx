import React from 'react';
import CubeSats from 'components/projects-components/projectsv2/CubeSats';
import Footer from '../../components/Footer';
import useTranslation from 'next-translate/useTranslation';
import NavBar from '../../components/navbar-components/NavBar';
import HeroSectionV2 from 'components/projects-components/projectsv2/HeroSectionV2';

export default function cubesats(props) {
    const { t } = useTranslation('projetos');
    
    const title = t('projetos:cubeSats.title');
    const subtitle = t('projetos:cubeSats.subtitle');
  
    return (
        <>
            <NavBar isProjectSubpage={true}/>
            <HeroSectionV2
                backgroundColor="#000000"
                backgroundImage="url(../images/Projetos/Cubesats/imagem1.jpg)"
                title="Cubesats"
            />

            <CubeSats/>
            <Footer/>
        </>
    );
}

export function getServerSideProps() { return { props: {} }; }
