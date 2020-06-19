import { useEffect, useRef } from "react";

const useLogLifecycle = (componentName) => {
    const name = useRef(componentName || "Unnamed");
    const counter = useRef(0);

    useEffect(() => {
        console.log(`[${name.current}]: Mounted...`);
        return () => console.log(`[${name.current}]: Unmounting...`);
    }, []);

    useEffect(() => {
        counter.current++;
        console.log(
            `[${name.current}]: Did update ${counter.current} time${
                counter.current === 1 ? "" : "s"
            }... `
        );
    });
};

export default useLogLifecycle;