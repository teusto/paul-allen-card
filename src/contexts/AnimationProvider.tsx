// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext, createContext, useState } from "react";

const AnimationContext = createContext();

const AnimationProvider = ({ children }:any) => {
    const [animationComplete, setAnimationComplete] = useState<boolean | null>(null)

    const completeAnimation = () => {
        setAnimationComplete(true);
    }
    
    return <AnimationContext.Provider value={{animationComplete, completeAnimation}}>{children}</AnimationContext.Provider>;
};

export default AnimationProvider;

export const useAnimations = () => {
    return useContext(AnimationContext);
};