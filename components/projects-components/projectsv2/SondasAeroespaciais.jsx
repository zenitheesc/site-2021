import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useState } from 'react';

export default function SondasAeroespaciais() {
    // precisa colocar a navbar aqui
    return (
        <Grid container sx={{border: 1, borderColor: 'red'}}>
            <Grid sm={12} md={12} p={2}>
                <Button size="small" color="primary" href='/projetos'>
                    Voltar para página de projetos
                </Button>
            </Grid>

            <Grid sm={12} md={6} p={2} sx={{border:1}}>
                <Typography gutterBottom variant="h2" component="div" >
                    Sondas aeroespaciais
                </Typography>
            </Grid>
        </Grid>
    )
}