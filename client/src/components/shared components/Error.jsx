import ErrorWrapper from '../styled/ErrorStyles';

function Error({ errorMsg, closeError }) {
  return (
    <ErrorWrapper>
      Error: {errorMsg}
      <span onClick={() => closeError()}>&times;</span>
    </ErrorWrapper>
  );
}

export default Error;
