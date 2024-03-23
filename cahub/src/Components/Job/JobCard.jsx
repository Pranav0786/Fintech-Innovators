import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Box, Grid, Typography, Button, makeStyles} from '@material-ui/core';
import { differenceInMinutes } from 'date-fns';
import { Firestore } from 'firebase/firestore';
const skills = ["Accountant","CA","AAA"];

const useStyles = makeStyles(theme => ({
    // Your styles remain the same
}));

const JobCard = ({ title, companyName, postedOn, type, location }) => { // Destructure props
    const classes = useStyles();
    return (
        <Box style={{padding:'20px'}} className={classes.wrapper}>
            <Grid container alignItems="center">

                <Grid item xs>
                    <Typography variant="subtitle1">{title}</Typography> {/* Utilize props */}
                    <Typography className={classes.companyName} variant="subtitle1">
                        {companyName}
                    </Typography>
                </Grid>

                <Grid item container xs>
                    {skills.map(skill => ( 
                       <Grid key={skill} className={classes.skillChip} item>
                          {skill}
                         </Grid>
                    ))}
                </Grid>

                <Grid item container direction="column" alignItems="flex-end" xs>
                    <Grid item>
                        <Typography variant="caption">
                            {differenceInMinutes(Date.now(), Firestore.jobCard.postedOn)} min ago | {type} | {location} {/* Utilize props */}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Box mt={2}>
                            <Button variant="outlined">Check</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    );
};

// Define PropTypes
JobCard.propTypes = {
    title: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    postedOn: PropTypes.instanceOf(Date).isRequired,
    type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default JobCard ;
