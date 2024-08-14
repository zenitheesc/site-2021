import React, { useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import useTranslation from 'next-translate/useTranslation';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function SondasAeroespaciais() {
    // precisa colocar a navbar aqui
    const { t } = useTranslation();
    const projetos = t('projetos:sondasAeroespaciais', {}, { returnObjects: true });
    const voltar = t('projetos:voltar', {}, { returnObjects: true });
    const garatea1 = projetos.projects.garatea1;

    return (
        <Grid container sx={{ border: 1, borderColor: 'red' }}>
            <Grid sm={12} md={12} p={2}>
                <Button size="small" color="primary" href="/projetos">
                    {voltar}
                </Button>
            </Grid>

            <Grid sm={12} md={6} p={2} sx={{ border: 1 }}>
                <Typography variant="h2" component="div">
                    {projetos.title}
                </Typography>
                <Typography variant="h4" component="div">
                    {projetos.subtitle}
                </Typography>
            </Grid>

            <Grid xs={12} sm={12}>
                <Grid xs={12}>
                    <Timeline
                        sx={{
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                            },
                        }}>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success" />
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent>
                                <Grid xs={12} sm={12} md={12}>
                                    <Typography xs={12}>{garatea1.year}</Typography>
                                    <Paper elevation={3} sx={{ padding: 2 }} sm={6} md={12}>
                                        <Typography variant="h6" component="h1">
                                            {garatea1.title}
                                        </Typography>
                                        <Typography variant="h6" component="h2">
                                            Primeira sonda
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>2019</TimelineContent>
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
            </Grid>
        </Grid>
    );
}
