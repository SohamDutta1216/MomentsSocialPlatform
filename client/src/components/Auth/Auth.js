import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

export default function Auth() {
  const classes = useStyles()
  const userExists = false

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

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
                  <TextField xs={6} name="firstName" label="firstName" autoFocus handleChange={handleChange}></TextField>
                  <TextField xs={6} name="lastName" label="lastName" autoFocus handleChange={handleChange}></TextField>
                </div>
              )
            }
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

