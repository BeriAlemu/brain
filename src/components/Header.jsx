import {brainwave} from "../assets"

function Header() {
    return ( 
        <div className="fixed top-0 z-50 bg-n-8/90 
        backdrop-blur-sm border-b border-n-8 ">
            <div className="flex items-center px-5 lg:px-7.5 
            xl:px-10 max-lg:py-4 ">
               <a className="block">
                    <img src={brainwave} width={190} height={40} />
                </a> 
            </div>
        </div>
     );
}

export default Header;