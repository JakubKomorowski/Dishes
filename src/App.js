import Form from "./components/Form";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Form />
      </Wrapper>
    </>
  );
};

export default App;
