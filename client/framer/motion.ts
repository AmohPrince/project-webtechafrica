export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction: "left" | "right" | "down" | "up") => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const nonShakingTextAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};

export const modalTransition = {
  initial: { y: -1000 },
  animate: { y: 0 },
  exit: { y: -1000 },
  transition: { duration: 0.5, type: "spring" },
};

// export const pageTransition = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
//   variants: {
//     initial: {
//       opacity: 0,
//       x: "-100vw",
//     },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         damping: 20,
//         stiffness: 100,
//         restDelta: 0.01,
//         duration: 0.5,
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: "100vw",
//       transition: {
//         duration: 0.5,
//       },
//     },
//   },
//   transition: {
//     type: "tween",
//     ease: "anticipate",
//     duration: 0.5,
//   },
// };

//HOMEPAGE
export const imageTransition = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
  transitions: [{ duration: 0.8 }],
};

export const textTransition = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
  transition: { duration: 0.8 },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
