import React, { useState, useEffect } from "react";
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from "../../theme/theme1.js";
import Businessman_Header from "../Businessman_Header/index.jsx";
import SearchBar from "../SearchBar/index.js";
import JobCard from "../Job/JobCard.jsx";
import { Box, Button, IconButton, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography, makeStyles } from '@material-ui/core';
import { collection, onSnapshot, addDoc } from 'firebase/firestore'; 
import db from '../Firebase/Firebase'; 

const useStyles = makeStyles((theme) => ({
    skillChip: {
        margin: theme.spacing(0.8),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        transition: "0.3s",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        cursor: "pointer",

        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: "#fff",
        }
    },
}));


const App = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection("jobs").orderBy("postedOn", "desc").get();
                const tempJobs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setJobs(tempJobs);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Businessman_Header />
            <Grid container style={{ justifyContent: "center",  }}>
                <Grid item xs={10}>
                  
                    
                    {jobs.map((job) => (
                        <JobCard key={job.id} {...job} />
                    ))}
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default App;
