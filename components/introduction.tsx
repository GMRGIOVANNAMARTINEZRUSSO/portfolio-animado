"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkbg/60" >
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority height="800" width="800" alt="profile pic" />

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                "puedes programarlo",
                                1000,
                                "puedes optimizarlo",
                                1000,
                                "puedes implementarlo",
                                1000,
                                "puedes desarrollarlo",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="block font bold text-secondary"
                        />
                    </h1>


                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 ">
                        como desarrolladora frontend y creadora de contenido, me dedico a combinar diseño y funcionalidad para crear expericiencias digitales impactantes y accesibles, que se ajusten a tus necesidades.
                    </p>

                    <div className="flex item-center justify-center gap-3 md:justify-start">
                        <Link href="/projects"
                            className="px-3 py-2 transition-all border-2 cursor text-md 
                            w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver Proyectos
                        </Link>
                        <Link href="/contact"
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary 
                            w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50">
                            Contacta Conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;

