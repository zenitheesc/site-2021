import React from 'react';
import {
    Box,
    Typography,
    Paper,
    Grid,
    useMediaQuery,
    useTheme,
    List,
    ListItem,
    Divider,
    Card,
    CardMedia,
} from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Image } from 'mui-image';
import MemoryIcon from '@mui/icons-material/Memory';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import BiotechIcon from '@mui/icons-material/Biotech';
import ProjectsCarousel from '../projects-structure/ProjectsCarousel';
import Carousel from 'react-material-ui-carousel';

export default function SondasAeroespaciais() {
    const { t } = useTranslation();
    const projetos = t('projetos:sondasAeroespaciais', {}, { returnObjects: true });
    const garatea1 = projetos.projects.garatea1;
    const garatea2 = projetos.projects.garatea2;
    const garatea3 = projetos.projects.garatea3;
    const garatea5 = projetos.projects.garatea5;
    const zenbee = projetos.projects.zenbee;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const garatea1Images = [
        'SondasAeroespaciais/Garatéa-I/photo8.webp',
        'SondasAeroespaciais/Garatéa-I/photo1.webp',
        'SondasAeroespaciais/Garatéa-I/photo2.webp',
        'SondasAeroespaciais/Garatéa-I/photo3.webp',
        'SondasAeroespaciais/Garatéa-I/photo4.webp',
        'SondasAeroespaciais/Garatéa-I/photo5.webp',
        'SondasAeroespaciais/Garatéa-I/photo6.webp',
        'SondasAeroespaciais/Garatéa-I/photo7.webp',
        'SondasAeroespaciais/Garatéa-I/photo9.webp',
        'SondasAeroespaciais/Garatéa-I/photo10.webp',
    ];

    const garatea2Images = [
        'SondasAeroespaciais/Garatéa-II/photo4.webp',
        'SondasAeroespaciais/Garatéa-II/photo1.webp',
        'SondasAeroespaciais/Garatéa-II/photo2.webp',
        'SondasAeroespaciais/Garatéa-II/photo3.webp',
        'SondasAeroespaciais/Garatéa-II/photo5.webp',
    ];

    const garatea3Images = [
        'SondasAeroespaciais/Garatéa-III/photo9.webp',
        'SondasAeroespaciais/Garatéa-III/photo1.webp',
        'SondasAeroespaciais/Garatéa-III/photo2.webp',
        'SondasAeroespaciais/Garatéa-III/photo3.webp',
        'SondasAeroespaciais/Garatéa-III/photo4.webp',
        'SondasAeroespaciais/Garatéa-III/photo5.webp',
        'SondasAeroespaciais/Garatéa-III/photo6.webp',
        'SondasAeroespaciais/Garatéa-III/photo7.webp',
        'SondasAeroespaciais/Garatéa-III/photo8.webp',
    ];

    const garatea5Images = [
        'SondasAeroespaciais/Garatéa-V/photo7.webp',
        'SondasAeroespaciais/Garatéa-V/photo1.webp',
        'SondasAeroespaciais/Garatéa-V/photo2.webp',
        'SondasAeroespaciais/Garatéa-V/photo3.webp',
        'SondasAeroespaciais/Garatéa-V/photo4.webp',
        'SondasAeroespaciais/Garatéa-V/photo5.webp',
        'SondasAeroespaciais/Garatéa-V/photo6.webp',
        'SondasAeroespaciais/Garatéa-V/photo8.webp',
        'SondasAeroespaciais/Garatéa-V/photo9.webp',
        'SondasAeroespaciais/Garatéa-V/photo10.webp',
    ];

    const zenbeeImages = [
        'SondasAeroespaciais/ZenBee/photo5.webp',
        'SondasAeroespaciais/ZenBee/photo2.webp',
        'SondasAeroespaciais/ZenBee/photo3.webp',
        'SondasAeroespaciais/ZenBee/photo4.webp',
        'SondasAeroespaciais/ZenBee/photo6.webp',
        'SondasAeroespaciais/ZenBee/photo1.webp',
    ];

    return (
        <Grid container sx={{ backgroundColor: 'black', border: 1, borderColor: 'black', color: 'white' }}>
            <Grid item xs={12} md={6} p={1} textAlign="center">
                <Typography variant="h4">{projetos.title}</Typography>
                <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                    {projetos.subtitle}
                </Typography>
            </Grid>

            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0, ml: -1.5 },
                    border: 1,
                    borderColor: 'black',
                    color: 'white',
                }}
            >
                {/* Zenbee */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#FED329' }} />
                        <TimelineConnector sx={{ backgroundColor: '#F28705' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ padding: 0 }}>
                        <Grid container spacing={2} textAlign="center">
                            <Grid item xs={12}>
                                <Typography variant="h4" sx={{ textAlign: 'left' }} ml={2}>
                                    {zenbee.year}
                                </Typography>
                                <Typography variant="h2">{zenbee.title}</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Image
                                    src="/images/Projetos/SondasAeroespaciais/ZenBee/photo1.webp"
                                    alt="Imagem da sonda"
                                    width="inherit"
                                    height="100vh"
                                    objectPosition="50% 0%"
                                    style={{ opacity: 'none' }}
                                    fill
                                />
                            </Grid>

                            {/* Overview */}
                            <Grid item container spacing={2} justifyContent="space-between">
                                {['launchDate', 'altitude'].map((key) => (
                                    <Grid item key={key}>
                                        <Paper sx={{ borderRadius: '8px', p: 1 }}>
                                            <Typography variant="subtitle2">{zenbee[key][0]}</Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                                {zenbee[key][1]}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Experimentos */}
                            <Grid item xs={12}>
                                <Paper sx={{ borderRadius: '8px', p: 2 }}>
                                    <Typography variant="h6" p={0.5}>
                                        {zenbee.menus[3]}
                                    </Typography>
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap">
                                        <Grid item>
                                            <BiotechIcon />
                                        </Grid>

                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {zenbee.experiments.map((experiment, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {experiment}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                            {/* Tecnologias */}
                            <Grid item xs={12}>
                                <Paper sx={{ borderRadius: '8px', p: 2 }}>
                                    <Typography variant="h6" p={0.5}>
                                        {garatea1.menus[1]}
                                    </Typography>
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap">
                                        <Grid item>
                                            <MemoryIcon />
                                        </Grid>

                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {[...garatea1.embedded].map((tech, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {tech}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap" sx={{ mt: 2 }}>
                                        <Grid item>
                                            <DeveloperBoardIcon />
                                        </Grid>
                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {[...garatea1.structure].map((tech, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {tech}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardMedia
                                        component="iframe"
                                        alt="green iguana"
                                        src="https://www.youtube.com/embed/BY_XwvKogC8?si=bedEwRraEvLAeZwg"
                                        border="none"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <Carousel>
                                        {zenbeeImages.map((item, i) => (
                                            <CardMedia
                                                key={i}
                                                component="img"
                                                image={`/images/Projetos/${item}`}
                                                alt="imagens Sonda Garatéa I"
                                            />
                                        ))}
                                    </Carousel>
                                </Card>
                            </Grid>
                        </Grid>
                    </TimelineContent>
                </TimelineItem>

                {/* Garatea-V */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#FED329' }} />
                        <TimelineConnector sx={{ backgroundColor: '#F28705' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ padding: 0 }}>
                        <Grid container spacing={2} textAlign="center">
                            <Grid item xs={12}>
                                <Typography variant="h4" sx={{ textAlign: 'left' }} ml={2}>
                                    {garatea5.year}
                                </Typography>
                                <Typography variant="h2">{garatea5.title}</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Image
                                    src="/images/Projetos/SondasAeroespaciais/Garatéa-V/photo5.webp"
                                    alt="Imagem da sonda"
                                    width="inherit"
                                    height="100vh"
                                    objectPosition="50% 0%"
                                    style={{ opacity: 'none' }}
                                    fill
                                />
                            </Grid>

                            {/* Overview */}
                            <Grid item container spacing={2} justifyContent="space-between">
                                {['launchDate', 'altitude'].map((key) => (
                                    <Grid item key={key}>
                                        <Paper sx={{ borderRadius: '8px', p: 1 }}>
                                            <Typography variant="subtitle2">{garatea5[key][0]}</Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                                {garatea5[key][1]}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Experimentos */}
                            <Grid item xs={12}>
                                <Paper sx={{ borderRadius: '8px', p: 2 }}>
                                    <Typography variant="h6" p={0.5}>
                                        {garatea5.menus[3]}
                                    </Typography>
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap">
                                        <Grid item>
                                            <BiotechIcon />
                                        </Grid>

                                        {/* <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {garatea5.experiments.map((experiment, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {experiment}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid> */}
                                    </Grid>
                                </Paper>
                            </Grid>

                            {/* Tecnologias */}
                            <Grid item xs={12}>
                                <Paper sx={{ borderRadius: '8px', p: 2 }}>
                                    <Typography variant="h6" p={0.5}>
                                        {garatea5.menus[1]}
                                    </Typography>
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap">
                                        <Grid item>
                                            <MemoryIcon />
                                        </Grid>

                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {[...garatea5.embedded].map((tech, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {tech}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap" sx={{ mt: 2 }}>
                                        <Grid item>
                                            <DeveloperBoardIcon />
                                        </Grid>
                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {[...garatea5.structure].map((tech, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {tech}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardMedia
                                        component="iframe"
                                        alt="green iguana"
                                        src="https://www.youtube.com/embed/BY_XwvKogC8?si=bedEwRraEvLAeZwg"
                                        border="none"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <Carousel>
                                        {garatea5Images.map((item, i) => (
                                            <CardMedia
                                                key={i}
                                                component="img"
                                                image={`/images/Projetos/${item}`}
                                                alt="imagens Sonda Garatéa I"
                                            />
                                        ))}
                                    </Carousel>
                                </Card>
                            </Grid>
                        </Grid>
                    </TimelineContent>
                </TimelineItem>

                {/* Garatea-III */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#FED329' }} />
                        <TimelineConnector sx={{ backgroundColor: '#F28705' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ padding: 0 }}>
                        <Grid container spacing={2} textAlign="center">
                            <Grid item xs={12}>
                                <Typography variant="h4" sx={{ textAlign: 'left' }} ml={2}>
                                    {garatea3.year}
                                </Typography>
                                <Typography variant="h2">{garatea3.title}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Image
                                    src="/images/Projetos/SondasAeroespaciais/Garatéa-V/photo5.webp"
                                    alt="Imagem da sonda"
                                    layout={isMobile ? 'fill' : 'intrinsic'}
                                    fill={true}
                                    style={{ opacity: 'none' }}
                                />
                            </Grid>

                            {/* Overview */}
                            <Grid item container spacing={2} justifyContent="space-between">
                                {['launchDate', 'altitude'].map((key) => (
                                    <Grid item key={key}>
                                        <Paper sx={{ borderRadius: '8px', p: 1 }}>
                                            <Typography variant="subtitle2">{garatea3[key][0]}</Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                                {garatea3[key][1]}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Experimentos */}
                            <Grid item xs={12}>
                                <Paper sx={{ borderRadius: '8px', p: 2 }}>
                                    <Typography variant="h6" p={0.5}>
                                        {garatea3.menus[3]}
                                    </Typography>
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap">
                                        <Grid item>
                                            <BiotechIcon />
                                        </Grid>

                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {garatea3.experiments.map((experiment, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {experiment}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                            {/* Tecnologias */}
                            <Grid item xs={12}>
                                <Paper sx={{ borderRadius: '8px', p: 2 }}>
                                    <Typography variant="h6" p={0.5}>
                                        {garatea3.menus[1]}
                                    </Typography>
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap">
                                        <Grid item>
                                            <MemoryIcon />
                                        </Grid>

                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {[...garatea3.embedded].map((tech, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {tech}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap" sx={{ mt: 2 }}>
                                        <Grid item>
                                            <DeveloperBoardIcon />
                                        </Grid>
                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {[...garatea3.structure].map((tech, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {tech}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardMedia
                                        component="iframe"
                                        alt="green iguana"
                                        src="https://www.youtube.com/embed/BY_XwvKogC8?si=bedEwRraEvLAeZwg"
                                        border="none"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <Carousel>
                                        {garatea5Images.map((item, i) => (
                                            <CardMedia
                                                key={i}
                                                component="img"
                                                image={`/images/Projetos/${item}`}
                                                alt="imagens Sonda Garatéa I"
                                            />
                                        ))}
                                    </Carousel>
                                </Card>
                            </Grid>
                        </Grid>
                    </TimelineContent>
                </TimelineItem>

                {/* Garatea-II */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#FED329' }} />
                        <TimelineConnector sx={{ backgroundColor: '#F28705' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ padding: 0 }}>
                        <Grid container spacing={2} textAlign="center">
                            <Grid item xs={12}>
                                <Typography variant="h4" sx={{ textAlign: 'left' }} ml={2}>
                                    {garatea2.year}
                                </Typography>
                                <Typography variant="h2">{garatea2.title}</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Image
                                    src="/images/Projetos/SondasAeroespaciais/Garatéa-II/photo5.webp"
                                    alt="Imagem da sonda"
                                    width="inherit"
                                    height="100vh"
                                    objectPosition="50% 0%"
                                    style={{ opacity: 'none' }}
                                    fill
                                />
                            </Grid>

                            {/* Overview */}
                            <Grid item container spacing={2} justifyContent="space-between">
                                {['launchDate', 'altitude'].map((key) => (
                                    <Grid item key={key}>
                                        <Paper sx={{ borderRadius: '8px', p: 1 }}>
                                            <Typography variant="subtitle2">{garatea2[key][0]}</Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                                {garatea2[key][1]}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Experimentos */}
                            <Grid item xs={12}>
                                <Paper sx={{ borderRadius: '8px', p: 2 }}>
                                    <Typography variant="h6" p={0.5}>
                                        {garatea2.menus[3]}
                                    </Typography>
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap">
                                        <Grid item>
                                            <BiotechIcon />
                                        </Grid>

                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {garatea2.experiments.map((experiment, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {experiment}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                            {/* Tecnologias */}
                            <Grid item xs={12}>
                                <Paper sx={{ borderRadius: '8px', p: 2 }}>
                                    <Typography variant="h6" p={0.5}>
                                        {garatea2.menus[1]}
                                    </Typography>
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap">
                                        <Grid item>
                                            <MemoryIcon />
                                        </Grid>

                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {[...garatea2.embedded].map((tech, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {tech}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap" sx={{ mt: 2 }}>
                                        <Grid item>
                                            <DeveloperBoardIcon />
                                        </Grid>
                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {[...garatea2.structure].map((tech, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {tech}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardMedia
                                        component="iframe"
                                        alt="green iguana"
                                        src="https://www.youtube.com/embed/BY_XwvKogC8?si=bedEwRraEvLAeZwg"
                                        border="none"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <Carousel>
                                        {garatea2Images.map((item, i) => (
                                            <CardMedia
                                                key={i}
                                                component="img"
                                                image={`/images/Projetos/${item}`}
                                                alt="imagens Sonda Garatéa I"
                                            />
                                        ))}
                                    </Carousel>
                                </Card>
                            </Grid>
                        </Grid>
                    </TimelineContent>
                </TimelineItem>

                {/* Garatea-I */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#FED329' }} />
                        <TimelineConnector sx={{ backgroundColor: '#F28705' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ padding: 0 }}>
                        <Grid container spacing={2} textAlign="center">
                            <Grid item xs={12}>
                                <Typography variant="h4" sx={{ textAlign: 'left' }} ml={2}>
                                    {garatea1.year}
                                </Typography>
                                <Typography variant="h2">{garatea1.title}</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Image
                                    src="/images/Projetos/SondasAeroespaciais/Garatéa-II/photo5.webp"
                                    alt="Imagem da sonda"
                                    width="inherit"
                                    height="100vh"
                                    objectPosition="50% 0%"
                                    style={{ opacity: 'none' }}
                                    fill
                                />
                            </Grid>

                            {/* Overview */}
                            <Grid item container spacing={2} justifyContent="space-between">
                                {['launchDate', 'altitude'].map((key) => (
                                    <Grid item key={key}>
                                        <Paper sx={{ borderRadius: '8px', p: 1 }}>
                                            <Typography variant="subtitle2">{garatea1[key][0]}</Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                                {garatea1[key][1]}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Experimentos */}
                            <Grid item xs={12}>
                                <Paper sx={{ borderRadius: '8px', p: 2 }}>
                                    <Typography variant="h6" p={0.5}>
                                        {garatea1.menus[3]}
                                    </Typography>
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap">
                                        <Grid item>
                                            <BiotechIcon />
                                        </Grid>

                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {garatea1.experiments.map((experiment, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {experiment}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                            {/* Tecnologias */}
                            <Grid item xs={12}>
                                <Paper sx={{ borderRadius: '8px', p: 2 }}>
                                    <Typography variant="h6" p={0.5}>
                                        {garatea1.menus[1]}
                                    </Typography>
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap">
                                        <Grid item>
                                            <MemoryIcon />
                                        </Grid>

                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {[...garatea1.embedded].map((tech, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {tech}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                    <Grid container alignItems="center" display="flex" flexWrap="nowrap" sx={{ mt: 2 }}>
                                        <Grid item>
                                            <DeveloperBoardIcon />
                                        </Grid>
                                        <Grid item>
                                            <List sx={{ ml: 1 }}>
                                                {[...garatea1.structure].map((tech, index) => (
                                                    <ListItem key={index} padding="0" sx={{ textAlign: 'justify' }}>
                                                        • {tech}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardMedia
                                        component="iframe"
                                        alt="green iguana"
                                        src="https://www.youtube.com/embed/BY_XwvKogC8?si=bedEwRraEvLAeZwg"
                                        border="none"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <Carousel>
                                        {garatea1Images.map((item, i) => (
                                            <CardMedia
                                                key={i}
                                                component="img"
                                                image={`/images/Projetos/${item}`}
                                                alt="imagens Sonda Garatéa I"
                                            />
                                        ))}
                                    </Carousel>
                                </Card>
                            </Grid>
                        </Grid>
                    </TimelineContent>
                </TimelineItem>

                {/* <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem> */}
            </Timeline>
        </Grid>
    );
}
