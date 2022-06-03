import { useState, useEffect } from "react"
import { Box, Center, Text, VStack } from "@chakra-ui/react"
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import { SelectRole } from "./SelectRole"
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

export const Login = () => {
  const [authPool, setAuthPool] = useState("")

  useEffect(() => {
    let authPool = localStorage.getItem("auth-pool")
    if(!!authPool) {
      setAuthPool(authPool)

      if(authPool === "admin") {
        Amplify.configure(adminConfig)
        API.configure(adminConfig)
      } else {
        Amplify.configure(companyConfig)
        API.configure(companyConfig)
      }
    }
  }, [])

  const handleSetAuthRole = (role) => {
    setAuthPool(role)
  }

  if(!authPool) {
    return (
      <SelectRole handleSetAuthRole={handleSetAuthRole} />
    )
  }

  return (
    <Center h="100vh">
      <VStack>
        <Text 
          textTransform="uppercase"
          fontSize="2vw"
        >{authPool} Login</Text>
        <Authenticator hideSignUp={true} />
        <Box 
          onClick={() => {
            localStorage.removeItem("auth-pool")
            window.location.replace("/")
          }}
        >
          <Text
            cursor="pointer"
            _hover={{
              textDecoration: "underline"
            }}
          >Change Role</Text>
        </Box>
      </VStack>
    </Center>
  )
}