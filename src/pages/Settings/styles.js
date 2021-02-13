import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  head:{
    position:'absolute',
    left:600,
    top:80
  },
  select: {
    marginTop: 100,
    marginLeft: 400,
    padding: 12,
    border: '1px solid #ccc',
    display: 'block',
    borderRadius: 4,
    resize: 'vertical',
    width: '35.5%',
  },
  form:{
    marginTop:150,
    marginLeft:50,
  },
  adminButton:{
    position: "absolute",
    left: 1300,
    top:10
  },
  card:{
    minWidth:500
  },

}));
