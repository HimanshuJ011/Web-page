import React from "react";
import {Drawer,DrawerBody, DrawerCloseButton,DrawerHeader,DrawerOverlay,Button, useDisclosure, DrawerContent, VStack, HStack} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import {BiMenuAltLeft} from "react-icons/bi"

const Header = () =>{

    const {isOpen,onOpen ,onClose} = useDisclosure();
    return (
       <>
       <Button
        pos={'fixed'}
        top={'4'}
        left={4}
        colorScheme={'purple'}
        w={10} h={10}
        onClick={onOpen} 
        borderRadius={10}
        >
        <BiMenuAltLeft size={20}></BiMenuAltLeft>
       </Button>

       <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay/>

        <DrawerContent>
            <DrawerCloseButton/>
                <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
                <VStack>
                    <Button  onClick={onClose} variant={"Solid"} colorScheme={'purple'}>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={"Solid"} colorScheme={'purple'}>
                        <Link to={'/video'}>Video</Link>
                    </Button>
                    <Button  onClick={onClose}variant={"Solid"} colorScheme={'purple'}>
                        <Link to={'/about'}>About</Link>
                    </Button>
                    <Button onClick={onClose} variant={"Solid"} colorScheme={'purple'}>
                        <Link to={'/conntacts'}>Contacts</Link>
                    </Button>
                </VStack>

                <HStack 
                pos={'absolute'}
                bottom={'100'} 
                w={'full'}
                justifyContent={"space-evenly"}
                left={0}
                >
                    <Button colorScheme={'purple'}>
                        <Link  to={'/login'}>Log In</Link>
                    </Button>

                    <Button variant={'outline'} colorScheme={'purple'} >
                        <Link to={'/login'} >Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>

        </Drawer>
       </>
    );
}

export default Header;