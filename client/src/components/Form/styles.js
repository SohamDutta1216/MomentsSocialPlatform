import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(4),
    backgroundColor: 'black',
    color: 'black',
    padding: '23px',
    borderRadius: '45px'
  },
  form: {
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    borderRadius: '45px',
    backgroundColor: 'orange'
  },
  buttonClear: {
    borderRadius: '45px',
    backgroundColor: 'grey'

  }
}));