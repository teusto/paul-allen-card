import { useContext, createContext, useState, useEffect } from "react";

const AnimationContext = createContext();

const AnimationProvider = ({ children }) => {
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