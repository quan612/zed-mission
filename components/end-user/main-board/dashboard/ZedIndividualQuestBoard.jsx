import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  useToast,
  Heading,
  Box,
  Container,
  Flex,
  Text,
  Grid,
  GridItem,
  Button,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { AnimatePresence } from "framer-motion";

import UserTierLevel from "./UserTierLevel";
import FeatureQuests from "./FeaturedQuests";
import ChallengeQuests from "./ChallengeQuests";
import { ChakraBox } from "@theme/additions/framer/FramerChakraComponent";
import { ChevronDownIcon } from "@chakra-ui/icons";
import WalletSignInModal from "@components/end-user/shared/riftly/WalletSignInModal";

const ZedIndividualQuestBoard = ({ session }) => {
  let achievementsArray = [
    {
      id: 1,
      isClaimed: true,
      isLocked: false,
      text: "Welcome to Riftly",
      description: "Bonus reward for starting your journey",
      quantity: 100,
    },
    {
      id: 2,
      isClaimed: false,
      isLocked: false,
      text: "Reach Tier 5",
      description: "Reach tier 5 to unlock this reward!",
      quantity: 100,
    },
    {
      id: 3,
      isClaimed: false,
      isLocked: false,
      text: "Log in 10 days in a row",
      description: "Check in every day to unlock this reward",
      quantity: 100,
    },
    {
      id: 4,
      isClaimed: false,
      isLocked: true,
      text: "Completed 10 quests",
      description: "Bonus reward for finishing 10 quests!",
      quantity: 100,
      progress: 50,
    },
    {
      id: 5,
      isClaimed: false,
      isLocked: true,
      text: "Completed all KYC quests",
      description: "Bonus reward for completing all know your customer quests!",
      quantity: 100,
      progress: 33,
    },
    {
      id: 6,
      isClaimed: false,
      isLocked: true,
      text: "Own certain Nfts",
      description: "Bonus reward for owning several Nfts!",
      quantity: 100,
      progress: 70,
    },
  ];

  const walletSignInModal = useDisclosure();

  if (session) {
    return (
      <>
        <AnimatePresence initial={false}>
          <Box
            display={"flex"}
            w="100%"
            alignItems={"center"}
            justifyContent="center"
            flexDirection="column"
          >
            <Box
              display={"flex"}
              w="66%"
              alignItems={"center"}
              justifyContent="center"
              flexDirection="column"
              gap="16px"
            >
              <Text
                textAlign={"center"}
                mt="84px"
                fontSize={"64px"}
                lineHeight="72px"
                fontWeight="bold"
                color="#F7F9F9"
                textShadow={"0px 4px 24px rgba(0, 0, 0, 0.56)"}
              >
                MISSION BOARD
              </Text>
              <Text
                textAlign={"center"}
                fontSize={"20px"}
                lineHeight="28px"
                fontWeight="500"
                color="#F7F9F9"
              >
                Complete missions to earn points and progress to the next Tier
                of Season Rewards
              </Text>
              <HStack>
                <Text
                  color="#43C3A1"
                  fontSize={"16px"}
                  textAlign={"center"}
                  fontWeight="600"
                >
                  READ MORE
                </Text>
                <ChevronDownIcon color="#43C3A1" w="12" h="6" />
              </HStack>

              <Box
                h="auto"
                display={"flex"}
                flexDirection={"column"}
                gap={"64px"}
                mt="97px"
              >
                {achievementsArray &&
                  achievementsArray.map((achievement, index) => {
                    const {
                      id,
                      isClaimed,
                      isLocked,
                      text,
                      description,
                      quantity,
                      progress,
                    } = achievement;
                    return (
                      <Box position={"relative"} key={index}>
                        <Grid
                          templateColumns={"1fr 3fr"}
                          zIndex={"2"}
                          position="relative"
                        >
                          <GridItem position="relative">
                            <Box
                              position={"relative"}
                              w="100%"
                              h="100%"
                              display={"flex"}
                              alignItems="center"
                              className="left wrapper"
                            >
                              <Box
                                className="circle wrapper"
                                w="auto"
                                h="90%" //126 of 140px
                                zIndex={"1"}
                                display={"flex"}
                                alignItems="center"
                                justifyContent={"center"}
                              >
                                <Flex
                                  className="circle"
                                  position={"relative"}
                                  alignItems="center"
                                  justifyContent={"center"}
                                  w="100%"
                                  h="100%"
                                  bg="#000"
                                >
                                  {!isLocked && (
                                    <Circle stroke={getColor(achievement)} />
                                  )}
                                  {isLocked && (
                                    <CircleProgress progress={progress} />
                                  )}
                                </Flex>

                                <Box
                                  position="absolute"
                                  display="flex"
                                  justifyContent="center"
                                  className="number wrapper"
                                >
                                  <Text
                                    fontWeight="500"
                                    fontSize={"40px"}
                                    lineHeight="1.5rem"
                                    color="#269C7C"
                                  >
                                    {achievement.id}
                                  </Text>
                                </Box>
                              </Box>

                              <Box
                                className="horizontal line"
                                left="10%"
                                w="90%"
                                height="1px"
                                bg="#269C7C"
                                position="absolute"
                                zIndex={0}
                              />
                            </Box>
                          </GridItem>

                          <GridItem>
                            <Box
                              className="right box"
                              key={id}
                              h={{ base: "140px", lg: "140px" }}
                              maxH={{ base: "140px", lg: "140px" }}
                              w="100%"
                              bg="rgba(38, 156, 124, 0.12)"
                              border="1px solid"
                              borderColor="#269C7C"
                              borderRadius={"16px"}
                            >
                              <TripBox item={achievement} index={index} />
                            </Box>
                          </GridItem>
                        </Grid>
                        {index < achievementsArray.length - 1 && (
                          <Box
                            className="vertical-line"
                            h="200px"
                            position="absolute"
                            left="63px"
                            top="32px"
                            w="1px"
                            bg={"#269C7C"}
                            zIndex={"0"}
                          />
                        )}
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </AnimatePresence>
      </>
    );
  } else {
    return (
      <>
        {walletSignInModal?.isOpen && (
          <WalletSignInModal
            isOpen={walletSignInModal.isOpen}
            onClose={() => {
              walletSignInModal.onClose();
            }}
          />
        )}
        <Flex
          className="start"
          w="50%"
          h="100%"
          height={"100%"}
          minHeight={"100%"}
          justifyContent={"center"}
          alignItems="center"
        >
          <VStack h="100%" spacing={"24px"}>
            <Text textAlign={"center"}>
              Missions are challenges in the fight for your identity. You can
              complete for Points. Gain Tiers through experience and claim the
              rewards.
            </Text>
            <Button
              variant={"zed"}
              onClick={() => {
                walletSignInModal.onOpen();
              }}
            >
              {" "}
              Start
            </Button>
          </VStack>
        </Flex>
      </>
    );
  }
};

export default ZedIndividualQuestBoard;

const Circle = ({ style = {}, stroke }) => {
  return (
    <svg
      width="126"
      height="126"
      viewBox="0 0 126 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="63" cy="63" r="55" stroke="#269C7C" strokeWidth="16" />
    </svg>
  );
};
const CircleProgress = ({ progress }) => {
  return (
    <>
      <Box position={"absolute"} boxSize="126px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="126"
          height="126"
          viewBox="0 0 126 126"
          preserveAspectRatio="xMinYMin meet"
        >
          <circle
            cx="50%"
            cy="50%"
            r="42%"
            fill="none"
            stroke="#fff"
            strokeWidth="16"
          ></circle>
        </svg>
      </Box>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="126"
        height="126"
        viewBox="0 0 126 126"
        preserveAspectRatio="xMinYMin meet"
        style={{ zIndex: "2" }}
      >
        <circle
          transform="rotate(-90 63 63)"
          cx="50%"
          cy="50%"
          r="53"
          fill="none"
          stroke="#43C3A1"
          strokeWidth="16"
          strokeDasharray="100"
          strokeDashoffset={` ${100 - progress}`}
          pathLength="100"
        ></circle>
      </svg>
    </>
  );
};

const getColor = (achievement) => {
  if (!achievement) return "#fff";
  const { isClaimed, isLocked } = achievement;

  if (isClaimed) {
    return "#1D63FF";
  }
  if (!isClaimed && !isLocked) {
    return "#00BBC7";
  }
  if (isLocked) {
    return "#fff";
  }
};

const TripBox = ({ item, index }) => {
  const toast = useToast();
  //   const queryClient = useQueryClient();
  const [disableBtn, disableBtnSet] = useState(false);

  const [showScore, showScoreSet] = useState(false);
  let scorePopupTimeout, invalidCacheTimeout;

  useEffect(() => {
    return () => {
      clearTimeout(scorePopupTimeout);
      clearTimeout(invalidCacheTimeout);
    };
  }, []);

  const claimQuest = useCallback(async (questId) => {
    disableBtnSet(true);
    try {
      // let res = await onClaim({ questId });
      // if (res.isError) {
      //     console.log(res.message);
      //     throw res.message;
      // }
      showScoreSet(true);
      scorePopupTimeout = setTimeout(() => {
        showScoreSet(false);
        clearTimeout(scorePopupTimeout);
      }, 500);

      invalidCacheTimeout = setTimeout(() => {
        queryClient.invalidateQueries("userQueryQuest");
        queryClient.invalidateQueries("userRewardQuery");
        disableBtnSet(false);
        clearTimeout(invalidCacheTimeout);
      }, 2000);
    } catch (error) {
      console.log(error);
      toast({
        title: "Exception",
        description: `Catch error at quest: ${quest.text}. Please contact admin.`,
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      disableBtnSet(false);
    }
  });

  const getClaimButton = useCallback(() => {
    if (!item) return null;
    const { isClaimed, isLocked } = item;

    if (isClaimed) {
      return (
        // <Button size={"md"} variant="ghost-base" >
        //   Claimed
        // </Button>
        <Text
          fontSize={"xl"}
          size={"md"}
          fontWeight="700"
          color="rgba(236, 241, 251, 0.66)"
        >
          Claimed
        </Text>
      );
    }
    if (!isClaimed && !isLocked) {
      return (
        <Button
          size={"md"}
          variant="zed"
          transitionDuration={"0.5s"}
          onClick={() => {}}
          fontSize="xl"
        >
          Claim
        </Button>
      );
    }
    if (isLocked) {
      return (
        <Button size={"md"} variant="ghost-base" disabled={true}>
          Locked
        </Button>
      );
    }
  });

  return (
    <>
      <Box display="flex" flex="1" h="100%">
        <Box
          className="user-achievement-claim"
          h="100%"
          display="flex"
          flexDirection={"row"}
          flex="1"
          px={{ base: "16px", lg: "32px" }}
          alignItems="center"
        >
          <Box h="42%" display={"flex"} flex="1">
            <Flex
              flexDirection="row"
              justifyContent={"space-between"}
              flex="1"
              alignItems="center"
            >
              <Flex display={"flex"} flexDirection="column">
                <>
                  <Heading color="#F7F9F9" fontSize={"xl"} lineHeight="28px">
                    {item.text}
                  </Heading>
                  <Text
                    fontWeight="500"
                    color="#ECF1FB"
                    opacity="0.66"
                    noOfLines={2}
                    fontSize="md"
                    // lineHeight={"24px"}
                    textShadow={"0px 4px 24px rgba(0, 0, 0, 0.56)"}
                  >
                    {item.description}
                  </Text>
                </>
              </Flex>
              <Flex position="relative" h="100%" alignItems={"center"}>
                <AnimatePresence>
                  {showScore && (
                    <ChakraBox
                      key={index}
                      position={"absolute"}
                      top="-3"
                      left="4"
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 20,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 1,
                            type: "spring",
                          },
                        },
                        removed: {
                          opacity: 0,

                          transition: {
                            duration: 2,
                            // type: "spring",
                          },
                        },
                      }}
                      initial="hidden"
                      animate="visible"
                      exit="removed"
                    >
                      <Text
                        className="score"
                        size="xl"
                        color="brand.cyan"
                        fontWeight={"700"}
                      >
                        + {item.quantity}
                      </Text>
                    </ChakraBox>
                  )}
                  {getClaimButton()}
                </AnimatePresence>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};
