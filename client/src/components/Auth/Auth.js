import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import { GoogleLogin } from 'react-google-login'
import Icon from './Icon'
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import { useDispatch } from 'react-redux';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

export default function Auth() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles()

  const [form, setForm] = useState(initialState);
  const [userExists, setUserExists] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userExists) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const handlePassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const switchText = () => {
    setForm(initialState);
    setShowPassword(false)
    setUserExists((prevUser) => !prevUser)
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };


  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const googleError = () => alert('Sign In was unsuccessful. Try again later');

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{userExists ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              userExists && (
                <div>

                  <TextField less name="firstName" label="firstName" autoFocus handleChange={handleChange}></TextField>

                  <TextField less name="lastName" label="lastName" autoFocus handleChange={handleChange}></TextField>

                </div>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handlePassword} />
            {userExists && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>


          <GoogleLogin
            clientId="489312559331-kk74imqhrheu0fspks6tcpfsl9jqpgou.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />


          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {userExists ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchText}>{userExists ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

