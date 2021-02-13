import { useEffect } from 'react';
import { UPDATE_RULE } from '../constants/types';
import { useStateValue } from '../context/AppContext';
import firebase from '../firebase';

export const useFirebaseRule = () => {
  const [_, dispatch] = useStateValue();

  useEffect(() => {
    const ruleRef = firebase.database().ref('rule');
    ruleRef.on('value', (snapshot) => {
      dispatch({
        type: UPDATE_RULE,
        payload: snapshot.val(),
      });
    });
  }, []);
};
