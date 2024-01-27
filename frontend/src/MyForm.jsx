import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css"



export default function MyForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const baseUrl = "https://email-automation-alpha.vercel.app/";

  const sendEmail = async () => {
  let dataSend = {
    email: email,
    subject: subject,
    message: "THANKS FOR SUBSCRIBING",
  };
  const res = await fetch(`${baseUrl}/email/sendEmail`, {
    method: "POST",
    body: JSON.stringify(dataSend),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      if (res.status > 199 && res.status < 300) {
        alert("Send Successfully !");
      }
    });
};
  function handleButtonClick() {
    alert("EMAIL SENT");
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("blue.200", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Send email to the account</Heading>
          
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("blue.50", "gray.200")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
          <FormControl id="subject">
              <FormLabel>NAME</FormLabel>
              <Input
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                placeholder="Enter your Name here..."
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Receiver's Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            
            
            <Stack spacing={10}>
            

<Button
  bg={"blue.400"}
  color={"white"}
  _hover={{
    bg: "blue.500",
  }}
  onClick={() => { handleButtonClick(); sendEmail(); }}
>
  Submit
</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
