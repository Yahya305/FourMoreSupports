import { Transition, VariantLabels, Variants } from "framer-motion";

export type AnimationType = {
    variants: Variants;
    initial: VariantLabels;
    animate: VariantLabels;
    exit: VariantLabels;
    transition: Transition;
};

export const ModalShowAnimation: AnimationType = {
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
