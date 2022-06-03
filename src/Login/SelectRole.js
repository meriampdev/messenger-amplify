import { Box, Text, Center } from "@chakra-ui/react"
import Amplify, { API } from 'aws-amplify';
import awsconfig from "aws-config"

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

export const SelectRole = ({ handleSetAuthRole }) => {

  const onRoute = (app) => {
    if(app === "admin") {
      localStorage.setItem("auth-pool", "admin")
      Amplify.configure(adminConfig)
      API.configure(adminConfig)
      handleSetAuthRole("admin")
    } else {
      localStorage.setItem("auth-pool", "company")
      Amplify.configure(companyConfig)
      API.configure(companyConfig)
      handleSetAuthRole("company")
    }
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