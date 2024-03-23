import React from 'react';
import { Box, Button, Select, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#FFF",
    display: "flex",
    boxShadow: "0px 1px 5px rgba(0,0,0.1)",
    borderRadius: "5px",
    "& > *": {
      flex: 1,
      height: "50px",
      margin: "8px",
    },
  },
});

const SearchBar = (props) => {
  const classes = useStyles();
  return (
    <Box style={{padding:'10px',marginTop:'-45px',marginBottom:'25px',position:'fix'}} className={classes.wrapper}>
      <Select defaultValue="Full Time">
        <MenuItem value="Full time">Full Time</MenuItem>
        <MenuItem value="Part time">Part Time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>

      <Select defaultValue="Remote">
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-office">In-office</MenuItem>
      </Select>

      <Button variant="contained" color="primary" disableElevation>Search</Button>
    </Box>
  );
};

export default SearchBar;
