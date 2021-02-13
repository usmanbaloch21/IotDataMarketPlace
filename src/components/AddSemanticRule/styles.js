import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  head:{},
  select1: {
    padding: 8,
    border: '1px solid #ccc',
    borderRadius: 4,
    maxWidth: '20%',

  },
  items:{
    display:"flex",
    justifyContent:"space-between"
  },
  label:{
    padding:2,
  },
  label1:{
    padding:10
  },
  radio:{
   width:"30%",
    position:'relative',
    left:"10px",
    marginLeft:"30%"
  },
  form:{
    marginTop:-5
  },
  addButton: {
    position:"relative",
    top:20,
    padding:-100
  }
}));
