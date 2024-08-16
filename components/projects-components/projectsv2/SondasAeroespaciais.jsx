import React, { useState } from 'react';
import { Box, Button, CardMedia, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import useTranslation from 'next-translate/useTranslation';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Image } from 'mui-image';

export default function SondasAeroespaciais() {
    // precisa colocar a navbar aqui
    const { t } = useTranslation();
    const projetos = t('projetos:sondasAeroespaciais', {}, { returnObjects: true });
    const voltar = t('projetos:voltar', {}, { returnObjects: true });
    const garatea1 = projetos.projects.garatea1;

    return (
        <Grid container sx={{ backgroundColor: 'black' }}>
            <Grid container sx={{ color: 'white' }}>
                <Grid item sm={12} md={6}>
                    <Typography variant="h2">{projetos.title}</Typography>
                    <Typography variant="h4">{projetos.subtitle}</Typography>
                </Grid>
            </Grid>

            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                        ml: -1.5,
                    },
                }}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#FED329' }} />
                        <TimelineConnector sx={{ backgroundColor: '#F28705' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Grid container>
                            <Grid container>
                                <Grid item xs={12} sx={{ color: 'white' }}>
                                    <Typography variant="h4">{garatea1.year}</Typography>
                                </Grid>

                                <Grid item xs={12} sm={6} md={12} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h2" sx={{ color: 'white' }}>
                                        {garatea1.title}
                                    </Typography>
                                    <Typography variant="h3" sx={{ color: 'white' }}>
                                        Primeira sonda
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Image
                                        src="/images/teste/image-44.png"
                                        alt="Imagem da sonda"
                                        width={'auto'}
                                        height={'100vh'}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={0.5}>
                                <Grid item>
                                    <Paper elevation={1}>
                                        <Typography variant="h6" component="h6" p={0.5}>
                                            {garatea1.launchDate[0]}
                                        </Typography>
                                        <Typography variant="h5" component="h5" p={0.5}>
                                            {garatea1.launchDate[1]}
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item>
                                    <Paper elevation={1}>
                                        <Typography variant="h6" component="h5" p={0.5}>
                                            {garatea1.altitude[0]}
                                        </Typography>
                                        <Typography variant="h6" component="h6" p={0.5}>
                                            {garatea1.altitude[1]}
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item>
                                    <Paper elevation={1}>
                                        <Typography variant="h6" p={0.5}>
                                            {garatea1.award[0]}
                                        </Typography>
                                        <Typography variant="h6" p={0.5}>
                                            {garatea1.award[1]}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Paper elevation={1}>
                                    <Typography variant="h6" p={0.5}>
                                        {garatea1.experiments[0]}
                                    </Typography>

                                    <Typography variant="h6" p={0.5}>
                                        {garatea1.experiments[1]}
                                    </Typography>
                                    <Typography variant="h6" p={0.5}>
                                        {garatea1.experiments[2]}
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid container spacing={2}>
                                <Paper elevation={1}>
                                    <Grid item p={1}>
                                        <Typography variant="h6" p={0.5}>
                                            {garatea1.menus[1]}
                                        </Typography>
                                        <Typography variant="h6" p={0.5}>
                                            {garatea1.embedded[0]}
                                        </Typography>
                                        <Typography variant="h6" p={0.5}>
                                            {garatea1.embedded[1]}
                                        </Typography>
                                        <Typography variant="h6" p={0.5}>
                                            {garatea1.embedded[2]}
                                        </Typography>
                                    </Grid>

                                    <Grid item p={1}>
                                        <Typography variant="h6" p={0.5}>
                                            {garatea1.structure[0]}
                                        </Typography>
                                        <Typography variant="h6" p={0.5}>
                                            {garatea1.structure[1]}
                                        </Typography>
                                        <Typography variant="h6" p={0.5}>
                                            {garatea1.structure[2]}
                                        </Typography>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#FED329' }} />
                        <TimelineConnector sx={{ backgroundColor: '#F28705' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        2019
                        <Grid item xs={12}>
                            <Image
                                src="/images/teste/image-44.png"
                                alt="Descrição da imagem"
                                width={'80vw'}
                                height={'100vh'}
                            />
                        </Grid>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="success" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>2017</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="success" />
                    </TimelineSeparator>
                    <TimelineContent>2016</TimelineContent>
                </TimelineItem>
            </Timeline>
        </Grid>
    );
}
