import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Landing from './pages/Landing';
import Pallet from './pages/Pallet/[id]';
import Post from './pages/Post/[id]';
import Pallets from './pages/Pallets';
import Posts from './pages/Posts'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    purple: {
      100: "#763DE9",
      200: "#BA4CF3",
      300: "#6736E7"
    },
    white: "#FFFFFF",
    background: {
      primary: "#111047",
      secondary: "#292859",
    }
  }
})

const App = () => {
  return(
    <ChakraProvider theme = {theme}>
      <Helmet>
        <title> thoughtBox </title>
      </Helmet>
      <Router>
        <Route path = '/' component = {Landing} />
        <Route path = '/Posts' component = {Posts} />
        <Route path = '/Post/:id' component = {Post} />
        <Route path = 'Pallet/:id' component = {Pallet} />
        <Route path = 'Pallets' component = {Pallets} />
      </Router>
    </ChakraProvider>
  )
}

export default App;