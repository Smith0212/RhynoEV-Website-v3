import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import "./Sparkles.css";

const Sparkles = ({
    id,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
    className
}) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const controls = useAnimation();

    const particlesLoaded = async (container) => {
        if (container) {
            controls.start({
                opacity: 1,
                transition: {
                    duration: 1,
                },
            });
        }
    };

    return (
        <motion.div
            className={`${className} sparkles-container`}
            animate={controls}
        >
            {init && (
                <Particles
                    id={id || "tsparticles"}
                    className="particles-container"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: background || "#252525",
                            },
                        },
                        fullScreen: {
                            enable: false,
                            zIndex: 1,
                        },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: false,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 2,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            bounce: {
                                horizontal: {
                                    value: 1,
                                },
                                vertical: {
                                    value: 1,
                                },
                            },
                            collisions: {
                                enable: false,
                            },
                            color: {
                                value: particleColor || "#ffffff",
                            },
                            move: {
                                enable: true,
                                speed: {
                                    min: 0.05,
                                    max: 0.5,
                                },
                            },
                            number: {
                                density: {
                                    enable: true,
                                    width: 400,
                                    height: 400,
                                },
                                value: particleDensity || 60,
                            },
                            opacity: {
                                value: {
                                    min: 0.1,
                                    max: 1,
                                },
                                animation: {
                                    enable: true,
                                    speed: speed || 2,
                                },
                            },
                            size: {
                                value: {
                                    min: minSize || 1,
                                    max: maxSize || 2,
                                },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </motion.div>
    );
};

Sparkles.propTypes = {
    id: PropTypes.string,
    background: PropTypes.string,
    minSize: PropTypes.number,
    maxSize: PropTypes.number,
    speed: PropTypes.number,
    particleColor: PropTypes.string,
    particleDensity: PropTypes.number,
    className: PropTypes.string,
};

export default Sparkles;
