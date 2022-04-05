// import { Link } from 'react-router-dom';
import React from 'react';
import { Avatar, Button, Checkbox, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';

const Login = () => {

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: "#403b3b", margin: "8px 0" };

    return (<Grid>
        <Paper elevation={5} style={paperStyle}>
            <Grid align="center">
                <Avatar style={avatarStyle}><LockIcon /></Avatar>
                <h2>Sign In</h2>
            </Grid>

            <TextField id="standard-basic"
                label="Username"
                placeholder='Enter Username'
                variant="standard"
                fullWidth
                required />

            <TextField id="standard-basic"
                label='Password'
                variant="standard"
                placeholder='Enter Password'
                type="password"
                fullWidth
                required/>
            <FormControlLabel
                label="Remember Me"
                control={<Checkbox />}
            />
            <Button type='submit' style={avatarStyle} variant='contained' fullWidth>Log In</Button>

            <Typography>
                <Link href='#'>
                    Forget Password?
                </Link>
            </Typography>

            <Typography> Do you have a Account?
                <Link href='/register'>
                    Register
                </Link>
            </Typography>
        </Paper>
    </Grid>

        // <div className="text-center">
        //     <h2 className='header-signup'>SIGN IN</h2>
        //     <form className='sign-border' action="/home">
        //         <div>
        //             <label>Username/Email</label><br />
        //             <input type="text" name="first_name" required />
        //         </div>
        //         <div>
        //             <label>Password</label>
        //             <br />
        //             <input type="password" name="password" required />
        //             <br />
        //             <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
        //         </div>
        //         <div>
        //             <button id="sub_btn" type="submit"> Login</button>
        //         </div>
        //     </form>
        //     <footer className='signup-footer'>
        //         <p>First time? <Link to="/register">Create an account</Link>.</p>
        //         <p><Link to="/">Back to Homepage</Link>.</p>
        //     </footer>
        // </div>
    )
}

export default Login;