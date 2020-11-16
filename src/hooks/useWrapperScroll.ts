import { useContext, useEffect } from "react";
import { useMotionValue } from "framer-motion";

import ModelsContext from "../contexts/ModelsContext";

export default function useWrapperScroll(){
    const { wrapperRef } = useContext(ModelsContext);

    const scrollY = useMotionValue(0);
    const scrollProgress = useMotionValue(0);

    useEffect(() => {
        const wrapper = wrapperRef.current

        if (wrapper) {
            const updateScrollValue = () => {
                const { scrollTop, scrollHeight, offsetHeight } = wrapper;

                const fullScroll = scrollHeight - offsetHeight;

                scrollY.set(scrollTop);
                scrollProgress.set(scrollTop / fullScroll);
            };

            wrapper.addEventListener('scroll', updateScrollValue);

            return () => wrapper?.removeEventListener('scroll', updateScrollValue);
        }
    }, [scrollProgress, scrollY, wrapperRef]); 

    return { scrollY, scrollProgress };
}