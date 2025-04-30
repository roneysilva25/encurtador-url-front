import { List } from "@chakra-ui/react";
import { BiInfoCircle } from "react-icons/bi";

export function GeneralInfoList() {
    return (
        <List.Root gap="2" variant="plain" align="center">
            <List.Item color={"gray.500"}>
                <List.Indicator asChild color="gray.500">
                    <BiInfoCircle />
                </List.Indicator>
                URLs encurtadas que não receberam nenhum clique nos últimos 30 dias são excluídas permanentemente.
            </List.Item>
        </List.Root>
    )
}