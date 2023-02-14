import React from "react";
import {
  Heading,
  Box,
  Flex,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Divider,
  ButtonGroup,
  Icon,
  Container,
  VStack,
  HStack,
  Center,
  Progress,
  Image,
  Input,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import "@fontsource/permanent-marker";
import WalletSignInModal from "./shared/riftly/WalletSignInModal";
import WalletAuthQuestModal from "./shared/riftly/WalletAuthQuestModal";

let login = true;

export default function Header({ session }) {
  let router = useRouter();

  const walletSignInModal = useDisclosure();
  const walletSignUpModal = useDisclosure();

  return (
    <>
      {walletSignUpModal?.isOpen && (
        <WalletAuthQuestModal
          isSignUp={true}
          isOpen={walletSignUpModal.isOpen}
          onClose={() => {
            walletSignUpModal.onClose();
          }}
        />
      )}
      {walletSignInModal?.isOpen && (
        <WalletSignInModal
          isOpen={walletSignInModal.isOpen}
          onClose={() => {
            walletSignInModal.onClose();
          }}
        />
      )}

      <HeaderWrapper>
        {session && (
          <Flex
            marginLeft={{ base: "30px", lg: "40px", "2xl": "80px" }}
            h="100%"
            alignItems="center"
            gap={"2rem"}
          >
            <Flex
              href={"/"}
              as={Link}
              h="100%"
              alignItems="center"
              borderBottom={`${
                router.pathname === "/"
                  ? "2px solid #269C7C"
                  : "2px solid #269C7C"
              } `}
              position="relative"
              textDecoration={"none"}
              _hover={{ borderBottom: "2px solid #269C7C" }}
            >
              <ForegroundGradient />
              <Text pl={"8px"} pr={"8px"}>
                Missions
              </Text>
            </Flex>

            <Flex h="100%" alignItems="center" position="relative">
              {/* <ForegroundGradient /> */}
              <Box pl={"8px"} pr={"8px"}>
                <Text>Rewards</Text>
              </Box>
            </Flex>
          </Flex>
        )}

        <MidLogo />
        <Flex
          marginLeft={"auto"}
          marginRight={{ base: "30px", lg: "40px", "2xl": "80px" }}
          justifyContent="center"
          alignItems="center"
          h="100%"
        >
          {!session && (
            <HStack
              alignItems={"center"}
              spacing={{ base: "16px", lg: "28px", "2xl": "32px" }}
            >
              <Text
                color="brand.zed1"
                fontSize="16px"
                lineHeight={"16px"}
                fontFamily="Montserrat"
                fontWeight={"600"}
                onClick={() => {
                  walletSignInModal.onOpen();
                }}
                cursor="pointer"
              >
                LOGIN
              </Text>
              <Text
                color="brand.zed1"
                fontSize="16px"
                lineHeight={"16px"}
                fontFamily="Montserrat"
                fontWeight={"600"}
                cursor="pointer"
                onClick={() => {
                  walletSignUpModal.onOpen();
                }}
              >
                SIGN UP
              </Text>
            </HStack>
          )}

          {session && (
            <HStack spacing={{ base: 4, "2xl": 8 }}>
              <Text
                color="rgba(236, 241, 251, 0.66)"
                fontWeight="700"
                fontSize={{ base: "14px", "2xl": "16px" }}
              >
                TIER:
                <Text
                  fontSize={{ base: "20px", "2xl": "24px" }}
                  ms="2"
                  as={"span"}
                  fontFamily="Orbitron"
                  color="brand.zed1"
                >
                  4
                </Text>
              </Text>

              <Box
                position="relative"
                w={{ base: "200px", "2xl": "210px" }}
                h={{ base: "45px", "2xl": "50px" }}
              >
                <HStack
                  h="100%"
                  w="100%"
                  space="8"
                  alignItems={"center"}
                  justifyContent="center"
                  position="absolute"
                  zIndex="2"
                >
                  <Text
                    fontFamily="Montserrat"
                    color="rgba(236, 241, 251, 0.66)"
                    fontWeight="700"
                    fontSize={{ base: "14px", "2xl": "16px" }}
                    lineHeight={{ base: "14px", "2xl": "16px" }}
                    letterSpacing={"0.857px"}
                  >
                    BALANCE:
                  </Text>
                  <Text
                    fontFamily="Orbitron"
                    color="brand.zed1"
                    fontWeight="700"
                    fontSize={{ base: "20px", "2xl": "24px" }}
                  >
                    300
                  </Text>
                </HStack>
                <Box position="absolute" top="0" zIndex="1">
                  <BalanceWrapper />
                </Box>
              </Box>

              <VStack alignItems={"flex-end"}>
                <Text
                  fontWeight={"400"}
                  color="#ECF1FB"
                  fontSize={{ base: "16px", "2xl": "20px" }}
                >
                  0x4043ea90c...bc2321
                </Text>
                <Text
                  fontFamily="Montserrat"
                  color="brand.zed1"
                  fontSize={{ base: "sm", "2xl": "md" }}
                  fontWeight={"600"}
                  letterSpacing={"0.857px"}
                >
                  EXIT
                </Text>
              </VStack>
            </HStack>
          )}
        </Flex>
      </HeaderWrapper>
    </>
  );
}

const ForegroundGradient = () => {
  return (
    <Box position={"absolute"} w="100%" h="100%">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 122 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_173_3976)">
          <rect
            x="8"
            y="-14"
            width="104"
            height="221"
            fill="url(#paint0_linear_173_3976)"
            fillOpacity="0.7"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_173_3976"
            x="-36"
            y="-58"
            width="192"
            height="309"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="22"
              result="effect1_foregroundBlur_173_3976"
            />
          </filter>
          <linearGradient
            id="paint0_linear_173_3976"
            x1="60"
            y1="-14"
            x2="60"
            y2="194.151"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#269C7C" stopOpacity="0" />
            <stop
              offset="0.369792"
              stopColor="#269C7C"
              stopOpacity="0.136612"
            />
            <stop offset="0.953125" stopColor="#269C7C" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};
const BalanceWrapper = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 216 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 0 20px #269C7C)" }}
    >
      <g filter="url(#filter0_d_18_7753)">
        <mask id="path-1-inside-1_18_7753" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 16.4837L32.0121 0H212V36.1719L191.899 48H4V16.4837Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 16.4837L32.0121 0H212V36.1719L191.899 48H4V16.4837Z"
          fill="#2A4747"
          fillOpacity="0.46"
          shapeRendering="crispEdges"
        />
        <path
          d="M4 16.4837L3.49284 15.6218L3 15.9118V16.4837H4ZM32.0121 0V-1H31.7397L31.5049 -0.861854L32.0121 0ZM212 0H213V-1H212V0ZM212 36.1719L212.507 37.0337L213 36.7437V36.1719H212ZM191.899 48V49H192.172L192.407 48.8619L191.899 48ZM4 48H3V49H4V48ZM4.50716 17.3455L32.5192 0.861854L31.5049 -0.861854L3.49284 15.6218L4.50716 17.3455ZM32.0121 1H212V-1H32.0121V1ZM211 0V36.1719H213V0H211ZM211.493 35.31L191.392 47.1381L192.407 48.8619L212.507 37.0337L211.493 35.31ZM191.899 47H4V49H191.899V47ZM5 48V16.4837H3V48H5Z"
          fill="#269C7C"
          mask="url(#path-1-inside-1_18_7753)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_18_7753"
          x="0"
          y="0"
          width="216"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_18_7753"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_18_7753"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const HeaderWrapper = ({ children }) => {
  return (
    <Box
      className="header"
      position={"relative"}
      w="100%"
      h="88px"
      display={"flex"}
      zIndex="99"
      __css={{
        // background: "rgba(28, 30, 44, 0.32)",
        background: "url('/img/zed/racing-header.svg') no-repeat center",
        backgroundSize: "cover",
        borderBottom: "2px solid transparent",
        borderImageSlice: "1",
      }}
      _after={{
        content: `""`,
        background:
          "linear-gradient(270deg, rgba(38, 156, 124, 0) 0%, rgba(38, 156, 124, 0.24) 30.21%, rgba(38, 156, 124, 0.32) 52.08%, rgba(38, 156, 124, 0.24) 73.96%, rgba(38, 156, 124, 0) 100%)",
        display: "block",
        height: "1px",
        width: "100%",
        position: "absolute",
        bottom: 0,
      }}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        pointerEvents={"all"}
        w="100%"
        position="relative"
      >
        {children}
      </Flex>
    </Box>
  );
};

const MidLogo = () => {
  return (
    <Box
      position={"absolute"}
      left="50%"
      top="50%"
      transform={"translate(-50%,-50%)"}
    >
      <Box h="88px" w="317px" position="relative" p="12px 0 12px 0">
        <Link
          position={"absolute"}
          left="26px"
          display={"flex"}
          alignItems={"center"}
          href={"https://zed.run"}
          minW={"100px"}
          h={"65px"}
        >
          <Image minW={"100px"} h={"65px"} src={"/img/zed/zed-logo-beta.svg"} />
        </Link>
        <Box
          position="relative"
          w="317px"
          // maxW="317px"
          minH="61.1px"
          top="0"
          left="0"
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          transform={"rotate(-11.01deg)"}
        >
          <Text
            fontSize="32px"
            lineHeight={"32px"}
            color="#658A71"
            opacity={"0.85"}
            fontFamily={"Permanent Marker"}
            w="100%"
            textAlign="center"
            // transform={"rotate(-11.01deg)"}
          >
            Missions
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
