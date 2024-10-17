import MotionTransition from "./transition-components";
import Image from "next/image";


const AvatarService = () => {
    return (        
        <MotionTransition position="right" 
        className="bottom-0 left-0 hidden md:inline-block md:absolute">
                <Image 
                    src="/services.png"
                    width={350}
                    height={350}
                    className="w-[350px] h-full"
                    alt="avatar"
                />
        </MotionTransition>
    );
};  

export default AvatarService