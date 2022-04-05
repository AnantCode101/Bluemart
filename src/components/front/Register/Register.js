import { useState, useEffect } from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Register = () => {

    const paperStyle = { padding: 20, height: '85vh', width: 280, margin: "20px auto" };
    const headerStyle = { margin: 10 };
    const avatarStyle = { backgroundColor: "#403b3b", margin: "8px 0" };

    const initialValues = { username: "", email: "", phone: "", password: "", cpassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        // debugger;
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {

        console.log('values:>>',values)
        // debugger
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        else if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        else if (!values.phone) {
            errors.password = "Phone Number is required";
        }else if(values.phone.length < 4){
            errors.phone = "Phone Number length is short"
        }else if(values.phone.length > 10){
            errors.phone = "Phone Number length is long"
        }
        else if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        else if(values.cpassword !== values.password){
            errors.cpassword = "Password doesnot match"
        }
        return errors;
    };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon /></Avatar>
                    <h2 style={headerStyle}>Register</h2>
                    <Typography variant="caption"> Please fill this form to create a account</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField id="standard-basic"
                        name="username"
                        label="Name"
                        placeholder='Enter Name'
                        variant="standard"
                        fullWidth
                        required
                        value={formValues.username}
                        onChange={handleChange}
                    />
                    <p>{formErrors.username}</p>

                    <TextField id="standard-basic"
                        name="email"
                        label="Email"
                        placeholder='Enter Email'
                        variant="standard"
                        fullWidth
                        required
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <p>{formErrors.email}</p>

                    <TextField id="standard-basic"
                        name="phone"
                        type="number"
                        label="Phone"
                        placeholder='Enter Phone'
                        variant="standard"
                        fullWidth
                        required
                        value={formValues.phone}
                        onChange={handleChange}
                    />
                    <p>{formErrors.phone}</p>

                    <TextField id="standard-basic"
                        name="password"
                        type="password"
                        label="Password"
                        placeholder='Enter Password'
                        variant="standard"
                        fullWidth
                        required
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    <p>{formErrors.password}</p>

                    <TextField id="standard-basic"
                        name="cpassword"
                        type="password"
                        label="Confirm Password"
                        placeholder='Enter Name'
                        variant="standard"
                        fullWidth
                        required
                        value={formValues.cpassword}
                        onChange={handleChange}
                    />
                    <p>{formErrors.cpassword}</p>

                    <Button type="submit" variant="contained" style={avatarStyle}> Signup</Button>
                </form>
            </Paper>
        </Grid>
        //     <div className="text-center">
        //         <h2>Registration</h2>
        //         <form action="/home">
        //             <p>
        //                 <label>Username</label><br/>
        //                 <TextField id="outlined-basic" label="Outlined" variant="outlined" required />

        //             </p>
        //             <p>
        //                 <label>Email address</label><br/>
        //                 <TextField id="outlined-basic" label="Outlined" variant="outlined" required/>

        //             </p>
        //             <p>
        //                 <label>Password</label><br/>
        //                 <TextField id="outlined-basic" label="Outlined" variant="outlined" required/>

        //             </p>
        //             <p>
        //                 <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
        //             </p>
        //             <p>
        //                 <Button id="sub_btn" type="submit"> Register</Button> 
        //             </p>
        //         </form>
        //         <footer>
        //             <p><Link to="/">Back to Homepage</Link>.</p>
        //         </footer>
        //     </div>
    )
}

export default Register;