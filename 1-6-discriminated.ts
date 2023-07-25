{
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    } 
  }

  type FailState = {
    result: 'failed';
    reason: {
      errorCode: number;
      text: string;
    }
  }

  type LoginState = SuccessState | FailState;

  const login = (id: string, password: string): LoginState => {
    if(id && password) {
      return { result: 'success', response: {body: 'success'}};
    }else {
      return { result: 'failed', reason: {errorCode: 400, text: 'failed'}};
    }
  }

  const printLogin = (loginState: LoginState): void => {
    if(loginState.result === 'success') {
      console.log(loginState.result);
    }else {
      console.log(loginState.result);
    }
  }
}