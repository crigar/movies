import React, { Fragment, useState } from 'react';
import Grid from '@mui/material/Grid';
export function NoMatch() {
    return (
        <Fragment>
            <Grid container spacing={2} padding={0,5,5,5}>
                <Grid item xs={12} md={12}>
                    <h2>Pagina no encontrada</h2>
                </Grid>
                <Grid item xs={12} md={3}>
                </Grid>
                <Grid item xs={12} md={9}>
                </Grid>
            </Grid>
        </Fragment>
        
    );
}