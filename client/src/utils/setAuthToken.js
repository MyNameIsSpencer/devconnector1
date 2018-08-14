import axios from 'axios';

// Adds Authorization token to every request if logged in
const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;
