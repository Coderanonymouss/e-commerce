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
            <h2>Hello world</h2>
            <Grid className='bg-black text-white text-center mt-10'
                  container
                  sx={{bgcolor: "black", color: "white", py: 3}}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Company </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> About </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Blog </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> press </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Jobs </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Partners </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;