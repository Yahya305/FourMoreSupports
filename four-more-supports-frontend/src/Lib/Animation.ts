export const ModalShowAnimation = {
    variants: {
        hidden: { scale: 0 },
        show: { scale: 1 },
    },
    initial: "hidden",
    animate: "show",
    exit: "hidden",
    transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.3,
    },
};
