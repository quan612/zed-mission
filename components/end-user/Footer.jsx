import React from "react";
import { Box, Flex, Container, Text, Link, Image } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";

export default function Footer() {
  let router = useRouter();

  return (
    <Box
      className="floating-menu"
      position={"relative"}
      w="100%"
      display={"flex"}
      alignItems={"center"}
      justifyContent="center"
      zIndex="99"
      __css={{
        background: "linear-gradient(180deg,rgba(24,25,28,0),#18191c)",
      }}
      marginTop="auto"
    >
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        pointerEvents={"all"}
        w={{ base: "85%", xl: "70%", "2xl": "50%" }}
        p={"46px 0 50px"}
      >
        <Flex className="navigation" alignItems={"center"}>
          <Text color="#F0F8FF" opacity="32%">
            Be First © ZED
          </Text>
          <Link
            href="https://zed.run/terms"
            marginLeft={{ base: "25px", lg: "32px" }}
          >
            <Text color="#F0F8FF" opacity="64%">
              Terms of Service
            </Text>
          </Link>
          <Link
            href="https://zed.run/privacy"
            marginLeft={{ base: "25px", lg: "32px" }}
          >
            <Text color="#F0F8FF" opacity="64%">
              Privacy Policy
            </Text>
          </Link>

          <Link
            href="https://zed.run/ccpa"
            marginLeft={{ base: "25px", lg: "32px" }}
          >
            <Text color="#F0F8FF" opacity="64%">
              CCPA
            </Text>
          </Link>
        </Flex>

        <Box
          borderRadius={"50%"}
          border="2px solid rgba(240, 248, 255, 0.12)"
          minW={{ base: "26px", md: "32px", lg: "36px" }}
          h={{ base: "26px", md: "32px", lg: "36px" }}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          <Text as={"span"} fontSize={{ base: "10px", md: "12px" }}>
            18+
          </Text>
        </Box>
        <Flex className="icons-part">
          <IconWrapper
            href="https://community.zed.run"
            iconSrc="/img/zed/icn-zed-24.svg"
            w="15px"
            h="15px"
          />
          <IconWrapper
            href="https://www.twitch.tv/zed_run"
            iconSrc="/img/zed/icn-twitch-24.svg"
          />
          <IconWrapper
            href="https://discord.gg/zedrun"
            iconSrc="/img/zed/icn-discord-24.svg"
          />
          <IconWrapper
            href="https://t.me/joinchat/Tq0wUgj_L4zQ4a_m"
            iconSrc="/img/zed/icn-telegram-24.svg"
          />
          <IconWrapper
            href="https://twitter.com/zed_run"
            iconSrc="/img/zed/icn-twitter-24.svg"
          />
          <IconWrapper
            href="https://www.youtube.com/channel/UCJ8lTFHpvsT2pJHaZk8942Q"
            iconSrc="/img/zed/icn-youtube-24.svg"
          />
          <IconWrapper
            href="https://www.facebook.com/runzedrun/"
            iconSrc="/img/zed/icn-facebook-24.svg"
          />
          <IconWrapper
            href="https://www.instagram.com/zed.run"
            iconSrc="/img/zed/icn-instagram-24.svg"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

const IconWrapper = ({ href, iconSrc, w = "20px", h = "20px" }) => {
  return (
    <Link display={"flex"} alignItems={"center"} me="18px" href={href}>
      <Box
        w={{ base: "26px", md: "32px", lg: "36px" }}
        h={{ base: "26px", md: "32px", lg: "36px" }}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        borderRadius="50%"
        __css={{ background: "rgba(240, 248, 255, 0.12)" }}
        _hover={{
          background: "linear-gradient(135deg,#3d675d,#395052)",
        }}
      >
        <Image w={w} h={h} src={iconSrc} />
      </Box>
    </Link>
  );
};

{
  /* <Flex h="100%" w="80%">
<Flex
  h="100%"
  w="100%"
  alignItems={"center"}
  justifyContent="space-between"
>
  <Box
    boxSize={"24px"}
    _hover={{ cursor: "pointer" }}
    onClick={() => {
      router.push("/");
    }}
  >
     <HomeMenuIcon
      fill={router.pathname == "/" ? "#00BBC7" : "#1D3148"}
    /> 
  </Box>
  <Box
    boxSize={"24px"}
    _hover={{ cursor: "pointer" }}
    onClick={() => {
      router.push("/redeem");
    }}
  >
     <RedeemMenuIcon
      fill={router.pathname == "/redeem" ? "#00BBC7" : "#1D3148"}
    /> 
  </Box>
  <Box
    boxSize={"24px"}
    _hover={{ cursor: "pointer" }}
    onClick={() => {
      router.push("/achievements");
    }}
  >
     <AchievementMenuIcon
      fill={
        router.pathname == "/achievements" ? "#00BBC7" : "#1D3148"
      }
    /> 
  </Box>
  <Box
    boxSize={"24px"}
    _hover={{ cursor: "pointer" }}
    onClick={() => {
      router.push("/personal-info");
    }}
  >
     <PersonalMenuIcon
      fill={
        router.pathname == "/personal-info" ? "#00BBC7" : "#1D3148"
      }
    /> 
  </Box>
</Flex>
</Flex> */
}
