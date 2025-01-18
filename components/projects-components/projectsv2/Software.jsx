import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useState } from 'react';

export default function Software() {
    // precisa colocar a navbar aqui
    return (
        <Grid container>
            <Grid sm={12} md={6} p={2}>
                <Button size="small" color="primary" href='/projetos'>
                    Voltar para página de projetos
                </Button>
            </Grid>
            <Grid sm={12} md={6} p={2}>
                <Typography gutterBottom variant="h2" component="div" >
                    Software
                </Typography>
            </Grid>
        </Grid>
    )
}