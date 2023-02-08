import React, { useEffect, useState, useContext, useCallback, useRef } from "react";

import { TallContainer } from "containers/user";
import { Heading, Box } from "@chakra-ui/react";
import { SignInSignUpWrapper } from "./Wrapper";

const SignInPage = () => {
    return (
        <Box
            position="absolute"
            w="100%"
            h="100%"
            backgroundImage="/img/user/banner.png"
            backgroundPosition="center"
            backgroundSize={"cover"}
            backgroundRepeat="no-repeat"
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
        >
            <TallContainer>
                <SignInSignUpWrapper isSignIn={true} />
            </TallContainer>
        </Box>
    );
};

export default SignInPage;
