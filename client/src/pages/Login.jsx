import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Connect from "../data/Connect";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [connected, setConnected] = useState();
  useEffect(() => {
    if (connected) window.location.href = "/admin";
  }, [connected]);

  function submitingLogin(email, password) {}

  return (
    <>
      <Connect isConnected={setConnected} />
      <Wrapper>
        <div className="containerLogin">
          <h1>Connectez vous</h1>
          <div className="form">
            <div className="email">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                required
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="pwd">
              <label htmlFor="pwd">Mot de passe</label>
              <input
                type="text"
                required
                name="pwd"
                onChange={(e) => setPwd(e.target.value)}
                autoComplete="off"
              />
            </div>
            <button type="submit" onClick={() => submitingLogin(email, pwd)}>
              Connection
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & .containerLogin {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10vh;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    padding: 2rem;
    border-radius: 10px;

    & h1 {
      font-size: var(--size-l);
      font-weight: var(--weight-s);
    }

    & .form {
      display: grid;
      grid-template-columns: 1fr;
      place-items: center;
      gap: 8vh;
      text-align: left;
      font-size: var(--size-m);

      & > div {
        position: relative;
        width: 100%;
        &:has(input:focus) label,
        &:has(input:valid) label {
          transform: translateY(-100%);
        }
      }

      & label {
        position: absolute;
        bottom: 0;
        padding-bottom: 0.5rem;
        transition: transform 0.2s ease-out;
      }

      & input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid black;
        padding: 0.5rem 0;
        font-size: var(--size-m);
        font-weight: var(--weight-s);
        outline: none;
        isolation: isolate;
        width: 100%;
      }
      & button {
        width: fit-content;
        border: 0;
        background-color: transparent;
        font-size: var(--size-s);
        background-color: #284855;
        color: white;
        padding: 0.5rem;
        border-radius: 10px;
        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default Login;
