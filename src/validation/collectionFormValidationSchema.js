import * as yup from "yup";


export default yup.object().shape({
     collectionName: yup.string().required("Please Specify Collection Name").trim(),
     imgUrl: yup.string().url("Please Enter Url").required("This is Required").trim(),
   });

