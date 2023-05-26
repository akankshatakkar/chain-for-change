import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import MyApp from "./_app";
import {StateContextProvider} from "./context";

const ClientRoot = () => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
      <Router>
      <StateContextProvider>
        <MyApp />
      </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  );
};

export default ClientRoot;
