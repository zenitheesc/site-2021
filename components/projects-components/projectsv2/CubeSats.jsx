import Grid from '@mui/material/Unstable_Grid2';
import React, { useState } from 'react';

export default function CubeSats() {
    return (
        <>
            {/* Espaços vazios so pra testar mesmo*/}
            <Grid container sx={{ minHeight: '100vh', padding: 2 }}>
                <Grid item xs={12} md={6} sx={{ border: 1, borderColor: 'red', padding: 2 }}>
                </Grid>
            </Grid>

            <Grid container sx={{ minHeight: '100vh', padding: 2 }}>
                <Grid item xs={12} md={6} sx={{ border: 1, borderColor: 'blue', padding: 2 }}>
                </Grid>
            </Grid>

            <Grid container sx={{ minHeight: '100vh', padding: 2 }}>
                <Grid item xs={12} md={6} sx={{ border: 1, borderColor: 'green', padding: 2 }}>
                </Grid>
            </Grid>
        </>
    );
}