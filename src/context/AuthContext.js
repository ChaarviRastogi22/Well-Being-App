import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error' : 
      return {...state, errorMessage: action.payload};
    case 'signup' :
      return { errorMessage: '', token: action.payload};
    case 'signin' :
      return { errorMessage: '', token: action.payload};
    case 'clear_error_message' :
      return {...state, errorMessage: ''};
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'});
}

const signup = dispatch => async ({ email, password, name, contact }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password, name, contact });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token});

      //navigate to main flow
      navigate('mainFlow');
    } catch (err) {
      dispatch({type: 'add_error', payload: 'Something went wrong with signing up'});
    }
};


const signin = dispatch => async ({ email, password }) => {
    // Try to signin
    try{
      const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      // Handle success by updating state
      dispatch({ type: 'signin', payload: response.data.token});
      //navigate to mainflow
      navigate('mainFlow');
    } catch (err){
      dispatch({type: 'add_error', payload: 'Something went wrong with signing in'});
    }
    
    // Handle failure by showing error message (somehow)
};

const signout = dispatch => {
  return () => {
    // somehow sign out!!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage },
  { token: null, errorMessage : '' }
);
