import { createContext } from "react";

const RegisterToken = createContext({
  token: null,
  setToken: () => {},
});

export default RegisterToken;