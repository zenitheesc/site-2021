import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useState } from 'react';

export default function Hardware() {
    // precisa colocar a navbar aqui
    return (
        <Grid container>
            <Grid sm={12} md={6} p={2}>
                <Typography gutterBottom variant="h2" component="div" >
                    Hardware
                </Typography>
            </Grid>
        </Grid>
    )
}