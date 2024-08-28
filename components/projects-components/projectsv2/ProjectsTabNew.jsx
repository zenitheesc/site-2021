import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

export default function ProjectsTabNew () {
    return (
        <Grid container sx={{backgroundColor: "black"}}>
            <Grid sm={12} md={6} p={2}>
                <Card sx={{border: 1, borderColor: "orange", backgroundColor: "black"}}>
                <CardMedia
                    sx={{ height: 340 }}
                    image="/images/Projetos/SondasAeroespaciais/Garatéa-II/photo4.webp"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="white" sx={{ textAlign: "center" }}>
                        Sondas aeroespaciais
                    </Typography>
                    <Typography variant="body2" color="white">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button 
                                size="large" 
                                sx={{ 
                                    backgroundColor: 'white', 
                                    color: 'black', 
                                    borderRadius: 2, 
                                    padding: '8px 16px', 
                                    '&:hover': { backgroundColor: 'darkgray' }, 
                                }} 
                                href='/projetos/sondas-aeroespaciais'
                            >
                            Saiba mais
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid sm={12} md={6} p={2}>
                <Card sx={{border: 1, borderColor: "orange", backgroundColor: "black"}}>
                <CardMedia
                    sx={{ height: 340 }}
                    image="/images/Projetos/SondasAeroespaciais/Garatéa-II/photo2.webp"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="white" sx={{ textAlign: "center" }}>
                        CubeSats
                    </Typography>
                    <Typography variant="body2" color="white">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button 
                                size="large" 
                                sx={{ 
                                    backgroundColor: 'white', 
                                    color: 'black', 
                                    borderRadius: 2, 
                                    padding: '8px 16px', 
                                    '&:hover': { backgroundColor: 'darkgray' }, 
                                }} 
                                href='/projetos/cubesats'
                            >
                            Saiba mais
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid sm={12} md={6} p={2}>
                <Card sx={{border: 1, borderColor: "orange", backgroundColor: "black"}}>
                <CardMedia
                    sx={{ height: 340 }}
                    image="/images/Projetos/Software/ZenithMonitor.webp"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="white" sx={{ textAlign: "center" }}>
                        Software
                    </Typography>
                    <Typography variant="body2" color="white">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button 
                                size="large" 
                                sx={{ 
                                    backgroundColor: 'white', 
                                    color: 'black', 
                                    borderRadius: 2, 
                                    padding: '8px 16px', 
                                    '&:hover': { backgroundColor: 'darkgray' }, 
                                }} 
                                href='/projetos/software'
                            >
                            Saiba mais
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid sm={12} md={6} p={2}>
                <Card sx={{border: 1, borderColor: "orange", backgroundColor: "black"}}>
                <CardMedia
                    sx={{ height: 340 }}
                    image="/images/Projetos/SondasAeroespaciais/Garatéa-III/photo8.webp"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="white" sx={{ textAlign: "center" }}>
                        Hardware
                    </Typography>
                    <Typography variant="body2" color="white">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button 
                                size="large" 
                                sx={{ 
                                    backgroundColor: 'white', 
                                    color: 'black', 
                                    borderRadius: 2, 
                                    padding: '8px 16px', 
                                    '&:hover': { backgroundColor: 'darkgray' }, 
                                }} 
                                href='/projetos/hardware'
                            >
                            Saiba mais
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid sm={12} md={6} p={2}>
                <Card sx={{border: 1, borderColor: "orange", backgroundColor: "black"}}>
                <CardMedia
                    sx={{ height: 340 }}
                    image="/images/Projetos/SondasAeroespaciais/Garatéa-I/photo3.webp"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="white" sx={{ textAlign: "center" }}>
                        Educacional
                    </Typography>
                    <Typography variant="body2" color="white" href='/projetos/educacional'>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button 
                                size="large" 
                                sx={{ 
                                    backgroundColor: 'white', 
                                    color: 'black', 
                                    borderRadius: 2, 
                                    padding: '8px 16px', 
                                    '&:hover': { backgroundColor: 'darkgray' }, 
                                }}
                            >
                            Saiba mais
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}