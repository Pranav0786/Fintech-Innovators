import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, FilledInput, Select, MenuItem } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import SearchBar from '../SearchBar/index';

export const BusinessmanHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [jobInfo, setJobInfo] = useState(() => {
        const storedJobInfo = localStorage.getItem('jobInfo');
        return storedJobInfo ? JSON.parse(storedJobInfo) : {
            title: "",
            type: "Full time",
            company: "",
            companyURL: "",
            location: "Remote",
            link: "",
            experience: "",
            graduationYear: "",
            description: "",
            skills: [] 
        };
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [postedJobs, setPostedJobs] = useState(() => {
        const storedJobs = localStorage.getItem('postedJobs');
        return storedJobs ? JSON.parse(storedJobs) : [];
    });

    useEffect(() => {
        localStorage.setItem('jobInfo', JSON.stringify(jobInfo));
    }, [jobInfo]);

    useEffect(() => {
        localStorage.setItem('postedJobs', JSON.stringify(postedJobs));
    }, [postedJobs]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const skills = [
        "Analytical",
        "Communication",
        "Time Management",
        "Leadership",
        "Problem-Solving",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        setSuccessMessage("Job added successfully!");
        setIsModalOpen(false);
        setPostedJobs(prevJobs => [...prevJobs, jobInfo]);
    };

    return (
        <div>
            <Box style={{ padding: '50px', backgroundColor: "black", color: "white" }}>
                <Grid container justifyContent='center'>
                    <Grid item xs={10}>
                        <Box style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography variant="h5">Open Job Listing</Typography>
                            <Button variant="contained" color="primary" disableElevation onClick={handleOpenModal}>POST A JOB</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Dialog open={isModalOpen} onClose={handleCloseModal} fullWidth>
                <DialogTitle>
                    <Box style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                        Post a Job
                        <IconButton onClick={handleCloseModal}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <FilledInput name="title" value={jobInfo.title} onChange={handleChange} placeholder="Job Title *" disableUnderline fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <Select name="type" value={jobInfo.type} onChange={handleChange} fullWidth>
                                <MenuItem value="Full time">Full Time</MenuItem>
                                <MenuItem value="Part time">Part Time</MenuItem>
                                <MenuItem value="Contract">Contract</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <FilledInput name="link" value={jobInfo.link} onChange={handleChange} placeholder="Job Link *" disableUnderline fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <Select name="location" value={jobInfo.location} onChange={handleChange} fullWidth>
                                <MenuItem value="Remote">Remote</MenuItem>
                                <MenuItem value="In-office">In-office</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <FilledInput name="experience" value={jobInfo.experience} onChange={handleChange} placeholder="Experience Required *" disableUnderline fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <FilledInput name="graduationYear" value={jobInfo.graduationYear} onChange={handleChange} placeholder="Graduation year *" disableUnderline fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <FilledInput name="description" value={jobInfo.description} onChange={handleChange} placeholder="Job Description *" disableUnderline fullWidth multiline rows={5} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Box style={{ color: "red", width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="caption">*Required Fields</Typography>
                        <Button variant="contained" disableElevation color="primary" onClick={handleSubmit}>Post Job</Button>
                    </Box>
                </DialogActions>
            </Dialog>

            <Grid container style={{ justifyContent: "center" }}>
                <Grid item xs={10}>
                    <SearchBar />
                    <Grid container style={{ justifyContent: "center" }}>
                        <Box mt={2}>
                            {postedJobs.map((job, index) => (
                                <Box key={index} style={{ padding: '20px', backgroundColor: 'transparent', border:'1px solid white',marginBottom: '10px', borderRadius:'20px',boxShadow: '0px 2px 4px rgba(10, 10, 10, 1)', marginTop: '10px', justifyContent: 'center' }}>
                                    <Typography variant="h6">{job.title}</Typography>
                                    <Typography variant="subtitle1">Type: {job.type}</Typography>
                                    <Typography variant="subtitle1">Company URL: {job.link}</Typography>
                                    <Typography variant="subtitle1">Location: {job.location}</Typography>
                                    <Typography variant="subtitle1">Experience Required: {job.experience}</Typography>
                                    <Typography variant="subtitle1">Description: {job.description}</Typography>
                                   
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default BusinessmanHeader;