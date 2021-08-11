import {useEffect, useRef} from "react";

const useUpdate = (fn: () => void, deps: any[]) => {
    const count = useRef(0)
    useEffect(() => {
        count.current += 1;
    })
    useEffect(() => {
        if (count.current > 1) {
            fn()
        }
    }, deps);//这里必须是不可变数据
}
export {useUpdate}