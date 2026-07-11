"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollAnimation = ({ 
  children, 
  animation = "fadeUp", 
  delay = 0, 
  duration = 0.6,
  className = "",
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, delay, ease: "easeOut" }
      }
    },
    fadeDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, delay, ease: "easeOut" }
      }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay, ease: "easeOut" }
      }
    },
    fadeRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay, ease: "easeOut" }
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration, delay, ease: "easeOut" }
      }
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, delay, ease: "easeOut" }
      }
    },
    scaleDown: {
      hidden: { opacity: 0, scale: 1.05 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, delay, ease: "easeOut" }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[animation]}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;