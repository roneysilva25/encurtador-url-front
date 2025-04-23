import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";
import { getCurrentYear } from "../../utils/get-current-year";
import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

export function Footer() {
    return (
        <Box textAlign={"center"} h={"70px"}>
            <hr />
            <Flex p={5} gap={5} alignItems={"center"} flexDir={"column"} justifyContent={"center"}>
                <Text fontWeight={"semibold"}>
                    Desenvolvido por Roney Diego | {getCurrentYear() } ©
                </Text>
                <Flex gap={2}>
                    <Link _hover={{ bgColor: "bg.emphasized", transition: "all 0.2s" }} borderRadius={"50%"} target="_blank" href="https://www.linkedin.com/in/roney-diego-14286a222/">
                        <Icon borderRadius={"50%"} p={1} border={"1px solid"} borderColor={"bg.emphasized"} size={"xl"}>
                            <LiaLinkedinIn />
                        </Icon>
                    </Link>
                    <Link _hover={{ bgColor: "bg.emphasized", transition: "all 0.2s" }} borderRadius={"50%"} target="_blank" href="https://github.com/roneysilva25">
                        <Icon borderRadius={"50%"} p={1} border={"1px solid"} borderColor={"bg.emphasized"} size={"xl"}>
                            <BsGithub />
                        </Icon>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}