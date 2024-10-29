import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

export const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType }= {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: BsNintendoSwitch,
        web: BsGlobe,
    }

    return (
        <HStack marginY={"4px"}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"/>
            ))}
        </HStack>
    )
}