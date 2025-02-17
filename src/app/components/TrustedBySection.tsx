"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import { motion } from "framer-motion";
import Image from "next/image";


export default function TrustedBySection() {

    const logos = [
        acmeLogo,
        quantumLogo,
        echoLogo,
        celestialLogo,
        pulseLogo,
        apexLogo,
    ];

    return (
        <section className="flex flex-col items-center overflow-x-hidden">
            <h2 className="text-3xl font-medium text-center sm:w-full md:w-[85%] md:text-4xl lg:w-[65%] lg:text-5xl">
                Startups Using Rangoli to Build Faster
            </h2>

            <div className="mt-8 overflow-hidden">
                <motion.div
                    className="flex gap-20 w-[calc(200%)] p-10"
                    animate={{
                        translateX: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* First Set */}
                    {logos.map((logo, index) => (
                        <Image key={`first-${index}`} src={logo} alt={`Logo ${index}`} className="h-6 lg:h-8 w-auto" />
                    ))}

                    {/* Second Set (Duplicate for seamless looping) */}
                    {logos.map((logo, index) => (
                        <Image key={`second-${index}`} src={logo} alt={`Logo ${index}`} className="h-8 w-auto" />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}