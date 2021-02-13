import { useEffect } from 'react';
import { UPDATE_COLLECTION } from '../constants/types';
import { useStateValue } from '../context/AppContext';
import firebase from '../firebase';

export const useFirebaseCollection = () => {
  const [_, dispatch] = useStateValue();

  useEffect(() => {
    const dataTypeRef = firebase.database().ref('collection');
    dataTypeRef.on('value', (snapshot) => {
      dispatch({
        type: UPDATE_COLLECTION,
        payload: snapshot.val(),
      });
    });
  }, []);
};
