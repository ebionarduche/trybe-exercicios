export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCCESSFUL = 'REQUEST_SUCCCESSFUL'; 
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const requestStarted = () => {
  return {
    type: REQUEST_STARTED
  }
}

const requestSuccessful = (imageUrl) => {
  return {
  type: REQUEST_SUCCCESSFUL,
  payload: imageUrl,
  }
};

export const requestFailed = () => {
  return {
    type: REQUEST_FAILED,
    payload: 'error',
  }
}

export const fetchDogImage = () => {
  return (dispatch) => {
  dispatch(requestStarted());
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => dispatch(requestSuccessful(data.message)))
  .catch((error) => dispatch(requestFailed(error)));
  }
}
