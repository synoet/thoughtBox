import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Landing from './pages/Landing';
import Pallet from './pages/Pallet/[id]';
import Post from './pages/Post/[id]';
import Pallets from './pages/Pallets';
import Posts from './pages/Posts'
import {ChakraProvider, extendTheme, Flex} from "@chakra-ui/react";
import styled from 'styled-components';
import BrandedHeader from './components/BrandedHeader';
const theme = extendTheme({
  colors: {
    purple: {
      100: "#763DE9",
      200: "#BA4CF3",
      300: "#6736E7"
    },
    gradient: {
      100: "linear-gradient(89.99deg, #BA4BF2 0.53%, #A052F4 47.15%, #6635E6 100%)",
      200: "linear-gradient(107.94deg, #461BE3 -19.46%, #BA4BF2 138.92%);"
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
      <AppLayout align = 'center' direction = 'column' w = '100%' h = '100%' minW = '100vw' minH = '100vh' bg = "background.primary">
        <BrandedHeader />
        <Content w = '100%' direction = 'column' align = 'center' wrap = 'wrap' padding = '1.5rem' maxW = '1200px' spacing = '1rem'>
          <Router>
            <Route path = '/' component = {Landing} />
            <Route path = '/Posts' component = {Posts} />
            <Route path = '/Post/:id' component = {Post} />
            <Route path = 'Pallet/:id' component = {Pallet} />
            <Route path = 'Pallets' component = {Pallets} />
          </Router>
        </Content>
      </AppLayout>
    </ChakraProvider>
  )
}

export default App;

const AppLayout = styled(Flex)``;

const Content = styled(Flex)``;