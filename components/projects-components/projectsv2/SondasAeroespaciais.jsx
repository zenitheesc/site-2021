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

export default function SondasAeroespaciais() {
    const { t } = useTranslation();
    const projetos = t('projetos:sondasAeroespaciais', {}, { returnObjects: true });
    const garatea1 = projetos.projects.garatea1;

    const zenbee = projetos.projects.zenbee;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                {/* Garatéa I */}
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
                                    src="/images/Projetos/SondasAeroespaciais/Garatéa-I/photo3.webp"
                                    alt="Imagem da sonda"
                                    layout={isMobile ? 'fill' : 'intrinsic'}
                                    width={isMobile ? undefined : 1080}
                                    height={isMobile ? undefined : 1920}
                                    fit="fill"
                                    style={{ opacity: 'none' }}
                                />
                            </Grid>

                            {/* Overview */}
                            <Grid item container spacing={2} justifyContent="space-between">
                                {['launchDate', 'altitude', 'award'].map((key) => (
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
                                        {garatea1.menus[2]}
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
                        </Grid>
                    </TimelineContent>
                </TimelineItem>

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
                                    layout={isMobile ? 'fill' : 'intrinsic'}
                                    width={isMobile ? undefined : 1080}
                                    height={isMobile ? undefined : 1920}
                                    fit="fill"
                                    style={{ opacity: 'none' }}
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
                        </Grid>
                    </TimelineContent>
                </TimelineItem>

                {/* Outros Anos */}
                {['2019', '2017', '2016'].map((year, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color={index === 0 ? 'primary' : 'success'} />
                            {index < 2 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography>{year}</Typography>
                            {year === '2019' && (
                                <Grid item xs={12}>
                                    <Image
                                        src="/images/teste/image-44.png"
                                        alt="Descrição da imagem"
                                        width={'80vw'}
                                        height={'100vh'}
                                    />
                                </Grid>
                            )}
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Grid>
    );
}
