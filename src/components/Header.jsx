import { useLocation } from "react-router-dom";
import {brainwave} from "../assets"
import {navigation} from "../constants/index.js"
import Button from "./button.jsx";
import ButtonGradient from "../assets/svg/ButtonGradient.jsx"
import MenuSvg from "../assets/svg/MenuSvg.jsx"
import {HamburgerMenu } from './design/Header.jsx'
import { useState } from "react";


function Header() {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    
    function toggleNavigation(){
        if(openNavigation){
            setOpenNavigation(false);
        }
        else {
            setOpenNavigation(true);
        }
    }

    function handleClick(){
            setOpenNavigation(false);
    }



    return ( 
        <div className={`fixed top-0 left-0 w-full z-50 bg-n-8/90 
        backdrop-blur-sm border-b border-n-6 ${openNavigation ? 'bg-n-8': 'bg-n-8/90 backdrop-blur-sm'  }`}>
            <div className="flex items-center px-5 lg:px-7.5 
            xl:px-10 max-lg:py-4 ">
               <a className="block w-[12rem] xl-mr-8" href="#hero">
                    <img src={brainwave} width={190} height={40} />
                </a> 

                <nav className={`hidden fixed top-[5rem] left-0 
                right-0 bottom-0 top-0 bg-n-8 lg:static lg:flex
                lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col item-center 
                    justify-center m-auto lg:flex-row">
                        {navigation.map((item) =>(
                            <a key={item.id} href={item.url}
                            className={`block relative font-code text-2xl uppercase
                            text-n-1 transition-colors hover:text-color-1 text-center
                           ${item.onlyMobile ? "lg:hidden" : "" } px-6 
                           py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                           ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}
                           lg:leading-5 lg:hover:text-n-1 xl:px-12 `}>
                              {item.title} 
                            </a>
                        ))}

                        <HamburgerMenu />
                    </div>
                </nav>

                <a href="#signup" className="button hidden mr-8 text-n-1/50
                transition-colors hover:text-n-1 lg:block">
                    New account
                </a>

                <div className="hidden lg:flex">
                <Button>
                        sign in
                        <ButtonGradient />
                </Button>
                </div>

                <Button className="ml-auto lg:hidden cursor-pointer" px="px-3" onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation}/>
                </Button>
            </div>
        </div>
     );
}

export default Header;