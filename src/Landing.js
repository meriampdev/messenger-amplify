import { Box, Text, Center } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Amplify, { API } from 'aws-amplify';
import App from "./App"
import awsconfig from "./aws-config"

const adminConfig = {
  ...awsconfig,
  "aws_appsync_graphqlEndpoint": process.env.REACT_APP_GRAPHQL_ENDPOINT,
  "aws_appsync_apiKey": process.env.REACT_APP_GRAPHQL_API_KEY,
  "aws_user_pools_web_client_id": process.env.REACT_APP_ADMIN_WEB_CLIENT,
  "aws_user_pools_id": process.env.REACT_APP_ADMIN_USER_POOL_ID
}

const companyConfig = {
  ...awsconfig,
  "aws_appsync_graphqlEndpoint": process.env.REACT_APP_GRAPHQL_ENDPOINT,
  "aws_appsync_apiKey": process.env.REACT_APP_GRAPHQL_API_KEY,
  "aws_user_pools_web_client_id": process.env.REACT_APP_COMPANY_WEB_CLIENT_ID,
  "aws_user_pools_id": process.env.REACT_APP_COMPANY_USER_POOL_ID
}

const OptionBox = ({ children }) => {
  return (
    <Box
      m="2vw" 
      cursor="pointer"
      _hover={{
        bg: "rgba(0,0,0,0.08)"
      }}
      boxSize="10vw" 
      border="1px solid rgba(0,0,0,0.5)" 
      borderRadius="1vw"
    >{children}</Box>
  )
}

const ConfigWrapper = ({ children }) => {
  let authPool = localStorage.getItem("auth-pool")
  if(authPool) {
    if(authPool === "admin") {
      Amplify.configure(adminConfig)
      API.configure(adminConfig)
    } else {
      Amplify.configure(companyConfig)
      API.configure(companyConfig)
    }

    return children
  } else {
    return <Navigate to="/" replace={true} />
  }

}

const Choose = () => {
  let navigate = useNavigate();

  const onRoute = (app) => {
    if(app === "admin") {
      localStorage.setItem("auth-pool", "admin")
      Amplify.configure(adminConfig)
      API.configure(adminConfig)
    } else {
      localStorage.setItem("auth-pool", "company")
      Amplify.configure(companyConfig)
      API.configure(companyConfig)
    }
    navigate("/app");
  }

  return (
    <Center h="100vh">
      <OptionBox>
        <Center onClick={() => onRoute('admin')} h="100%">
          <Text>Admin</Text>
        </Center>
      </OptionBox>
      <OptionBox>
        <Center onClick={() => onRoute('company')} h="100%">
          <Text>Company</Text>
        </Center>
      </OptionBox>
    </Center>
  )
}

export default function Landing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Choose />} />
        <Route exact path="/app" element={<ConfigWrapper><App /></ConfigWrapper>} />
      </Routes>
    </BrowserRouter>
  )
}