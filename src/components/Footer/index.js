import { Heading, HStack, Link, Text, VStack, Wrap } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { ImVideoCamera } from "react-icons/im";

const Footer = () => {
  return (
    <Wrap spacing={3} w="full" justify="space-between" align="center" mb={6}>
      <VStack>
        
      </VStack>
      <HStack as={RouterLink} to="/" fontSize="4xl">
        <img src="/favicons/logo-bg.png" alt="Logo" height="40px" />
      </HStack>
    </Wrap>
  );
};

export default Footer;
