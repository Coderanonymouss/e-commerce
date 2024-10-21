import {Button, Grid, Typography} from "@mui/material";
import React from 'react'
import * as PropTypes from "prop-types";

Grid.propTypes = {
    item: PropTypes.bool,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    children: PropTypes.node
};
const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                  container
                  sx={{bgcolor: "black", color: "white", py: 3}}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Компания </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Біз туралы</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Блог </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Басымдылық </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Жұмыс орындары </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Серіктестер </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Шешімдер </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Маркетинг</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Аналитика </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Сауда </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Түсініктер </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> қолдау көрсету </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Құжаттама </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Guldes </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> API күйі </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Заңды </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Талап </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Құпиялық </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Шарттар </Button>
                    </div>


                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2023 Менің компаниям Барлық құқықтар қорғалған.
                    </Typography>
                    <Typography variant="body2" component="p" aligh="center">
                        Мен сүйіспеншілікпен жасаған
                    </Typography>
                    <Typography variant="body2" components="p" align="center">
                        Белгішелер жасаған{' '}
                    </Typography>

                </Grid>
            </Grid>
        </div>

    )
}

export default Footer;