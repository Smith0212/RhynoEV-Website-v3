import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HeroHighlight, Highlight } from "../WhyRhynoHeadingBG/WhyRhynoHeadingBG";

const HeroHighlightDemo = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <HeroHighlight>
            <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: [20, -5, 0] } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight lg:leading-relaxed text-center mx-auto px-2 xs:px-4"
            >
                <span className="block text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-8xl leading-relaxed whitespace-normal mb-2 sm:mb-4">
                    What Makes Rhyno awesome
                </span>
                <Highlight className="text-white leading-relaxed text-base xs:text-lg sm:text-3xl md:text-4xl lg:text-5xl">
                    Why you should buy it.
                </Highlight>
            </motion.h1>
        </HeroHighlight>
    );
};

export default HeroHighlightDemo;
