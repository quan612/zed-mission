import React from "react";
import { Box, Flex, Container } from "@chakra-ui/react";
import RiftlyConnectBoard from "./RiftlyConnectBoard";
import { Banner, FloatingFooter } from "./wrappers";
import { Router, useRouter } from "next/router";

import Footer from "./Footer";
import Header from "./Header";

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

export default function UserLayout({ session, children }) {
  let router = useRouter();

  return (
    <Box
      w="100%"
      minH="100vh"
      h="auto"
      display={"flex"}
      position={"relative"}
      flexDirection="column"
    >
      <Header session={session} />
      {children}
      <Footer />
    </Box>
  );
}
