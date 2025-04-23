import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaLink } from "react-icons/fa6";
import { ColorModeButton } from "./color-mode";

export function Header() {
    return (
        <Box h={"70px"} bgColor={"blue.solid"} position={"absolute"} w={"100vw"}>
            <Flex justifyContent={"space-between"} p={4}>
                <Flex gap={"2"} alignItems={"center"}>
                    <Icon size={"2xl"} color={"white"}>
                        <FaLink />
                    </Icon>
                    <Text letterSpacing={"wider"} fontSize={"lg"} fontWeight={"bold"} color={"white"}>ENCURTADOR DE URL</Text>
                </Flex>
                <ColorModeButton color={"white"} variant={"plain"} />
            </Flex>
        </Box>
    )
}