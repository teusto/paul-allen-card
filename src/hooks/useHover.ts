import { useEffect, useRef, useState } from "react";

const useHover = (ref?: any) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const genericRef = useRef(ref || null);

    useEffect(() => {
        console.log(genericRef)
        const updateMousePosition = (ev) => {
            setMousePosition({
                x: ev.clientX,
                y: ev.clientY
            });

            window.addEventListener('mousemove', updateMousePosition);

            return () => {
                window.removeEventListener('mouseover', updateMousePosition);
            }
        }
    }, [])

    return { isHovered, mousePosition };
}

export default useHover;