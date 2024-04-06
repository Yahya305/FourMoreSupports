import { useAppSelector } from "@/Redux/Hooks";
import { AnimatePresence } from "framer-motion";

const ModalsInit = () => {
    const GlobalVars = useAppSelector((state) => state.GlobalVars);
    return <div className="__Modals_Init__">
        <AnimatePresence>
            
        </AnimatePresence>
    </div>;
};

export default ModalsInit;
