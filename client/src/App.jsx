import "./App.css";
import Navigation from "./navigation/Navigation";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export default App;
