import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaLink } from "react-icons/fa6";
import { ColorModeButton } from "./color-mode";

export function Header() {
    return (
        <Box h={"70px"} position={"absolute"} bg={"bg.subtle"} w={"100%"}>
            <Flex justifyContent={"space-between"} p={4}>
                <Flex gap={"2"} alignItems={"center"}>
                    <Icon size={"2xl"} color={"blue.500"}>
                        <FaLink />
                    </Icon>
                    <Text letterSpacing={"wider"} fontSize={"lg"} fontWeight={"bold"} color={"gray.fg"}>ENCURTADOR DE URL</Text>
                </Flex>
                <ColorModeButton color={"gray.fg"} variant={"plain"} />
            </Flex>
            <hr />
        </Box>
    )
}