import request from 'superagent';

const baseUrl = 'http://jservice.io/api/random';


export function getQuestion(){
  return dispatch => {
    request.get(`${baseUrl}`).end(
      (error, response) => {
        if(!error) {
          dispatch({ type: `GET_QUESTION`, questions: response.body[0]});
        }
      }
    );
  };
}


// result stuck into property called question