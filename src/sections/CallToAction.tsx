"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );
    }, []);
    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);
    return (
        <section className="py-24">
            <motion.div ref={scope} className="overflow-x-clip p-4 flex ">
                <div
                    className="flex flex-none gap-16 text-7xl md:text-8xl font-medium  group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16 pr-16">
                            <span className="text-lime-400 text-7xl">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400">
                                Try it for free
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
