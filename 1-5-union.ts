type SuccessState = {
  response: {
    body: string;
  } 
}

type FailState = {
  reason: {
    errorCode: number;
    text: string;
  }
}

type LoginState = SuccessState | FailState;

const login = (id: string, password: string): LoginState => {
  if(id && password) {
    return { response: {body: 'success'}};
  }else {
    return { reason: {errorCode: 400, text: 'failed'}};
  }
}
