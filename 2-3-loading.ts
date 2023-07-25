type LoadingState = {
  state: 'loading';
};

type SuccessState = {
  state: 'success';
  response: {
    body: string;
  };
};

type FailState = {
  state: 'fail';
  reason: string;
}

type ResourceLoadState = LoadingState | SuccessState | FailState;

const printLoginState = (args: ResourceLoadState) => {
  if(args.state === 'loading') {
    console.log('loading');
  } else if(args.state === 'success') {
    console.log(args.response.body);
  } else {
    console.log(args.reason);
  }
}

printLoginState({ state: 'loading' }); // 👀 loading...
printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network