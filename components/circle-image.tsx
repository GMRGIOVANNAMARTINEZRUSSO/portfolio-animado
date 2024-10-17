"use client";
import Image from "next/image";
import { use } from "react";
const CircleImage = () => {
    return (
        <div className="botton-0 right-0 hidden md:inline-block md:absolute">
            <Image
                src="/circles.png"
                width={200}
                height={200}
                className="w-full h-full"
                alt="circle"
            />
        </div>
    );
};

export default CircleImage;