"use client";
import Image from "next/image";
import MotionTransition from "./transition-components";

const Avatar = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block">
            <div className="w-full h-full rounded-full overflow-hidden">    

                <Image
                    src="/avatar-1.png"
                    width={350}
                    height={350}
                    className="w-full h-full"
                    alt="avatar"
                />  
            </div>
        </MotionTransition>
    );
};

export default Avatar