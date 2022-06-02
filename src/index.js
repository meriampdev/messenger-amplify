import React from 'react';
import {createRoot} from 'react-dom/client';
import Landing from "./Landing"
import * as serviceWorker from './serviceWorker';
import { ChakraProvider } from '@chakra-ui/react'

const root = createRoot(
  document.getElementById("root")
);
root.render(
  <ChakraProvider>
    <Landing />
  </ChakraProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
