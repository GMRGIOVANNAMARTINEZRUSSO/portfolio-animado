"use client"
import Image from "next/image"
import MotionTransition from "./transition-components"

const AvatarPortfolio = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image
                src="/avatar-works.png"
                width={300}
                height={300}
                className="w-full h-full"
                alt="avatar" />
        </MotionTransition>
    )
}

export default AvatarPortfolio