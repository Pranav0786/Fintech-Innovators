import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container } from '@material-ui/core';
import './BusinessmanReg.css';

const BusinessmanRegistration = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        email: '',
        businessmanName: '',
        caName: '',
        address: '',
        description: '',
    });

    const [documentFile, setDocumentFile] = useState(null);
    const [documentFileName, setDocumentFileName] = useState('');

    const handleDocumentFileChange = (e) => {
        const file = e.target.files[0];
        setDocumentFile(file);
        setDocumentFileName(file ? file.name : '');
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const res = await fetch('http://10.40.13.53:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
        } catch (error) {
            console.error('Error occurred during form submission:', error);
        }
    };

    return (
        <Container maxWidth="sm" className='bus-reg-container'>
            <div className='bus-reg-container-in'>
                <Box mt={15} textAlign="center" style={{color:'white'}}>
                    <Typography variant="h4" className="registration-heading">Businessman Registration</Typography>
                    <form className="registration-form">
                        <TextField
                            label="Businessman Name"
                            variant="outlined"
                            fullWidth
                            className="input-field"
                            value={formData.businessmanName}
                            onChange={(e) => setFormData({ ...formData, businessmanName: e.target.value })}
                            style={{ marginBottom: '15px' }}
                        />

                        <TextField
                            label="Email"
                            variant="outlined"
                            type="email" // corrected typo here
                            fullWidth
                            className="input-field"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            style={{ marginBottom: '15px' }}
                        />

                        <TextField
                            label="Business Name"
                            variant="outlined"
                            fullWidth
                            className="input-field"
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            style={{ marginBottom: '15px' }}
                        />

                        <TextField
                            label="Address"
                            variant="outlined"
                            fullWidth
                            className="input-field"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            style={{ marginBottom: '15px' }}
                        />

                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            className="input-field"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            style={{ marginBottom: '15px' }}
                        />

                        <TextField
                            label="Name of Chartered Accountant"
                            variant="outlined"
                            fullWidth
                            className="input-field"
                            value={formData.caName}
                            onChange={(e) => setFormData({ ...formData, caName: e.target.value })}
                            style={{ marginBottom: '15px' }}
                        />

                        <input
                            type="file"
                            className="document-upload"
                            onChange={handleDocumentFileChange}
                            style={{ marginBottom: '-37px' }}
                        />
                        <Typography variant="body1" className="document-file-name" style={{color:'black'}}>{documentFileName}</Typography> {/* Display file name */}
                        <Button
                            variant="contained"
                            color="primary"
                            className="register-button"
                            onClick={handleRegister}
                            style={{ marginTop: '20px' }}
                        >
                            Register
                        </Button>
                    </form>
                </Box>
            </div>
        </Container>
    );
};

export default BusinessmanRegistration;
