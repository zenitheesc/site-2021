import React from 'react';
import CubeSats from 'components/projects-components/projectsv2/CubeSats';
import Footer from '../../components/Footer';
import useTranslation from 'next-translate/useTranslation';
import NavBarProjects from '../../components/navbar-components/NavBarProjects';


export default function cubesats() {
    const { t } = useTranslation();
    return (
        <>
            <NavBarProjects/>
            <CubeSats />
            <Footer />
        </>
    );
}


