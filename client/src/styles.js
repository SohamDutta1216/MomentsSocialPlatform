import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 100,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  image: {
    marginLeft: '15px',
    marginBottom: '20px',
    marginTop: '20px'
  },
  [theme.breakpoints.down('sm')]: {
    inputContainer: {
      flexDirection: 'column-reverse'
    }
  }
}));