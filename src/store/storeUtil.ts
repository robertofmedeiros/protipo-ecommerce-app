import { useEffect, useState } from "react";

export const useObservable = <T = any>(observable: any) => {
    const [state, setState] = useState<T>();

    useEffect(() => {
        const sub = observable.subscribe(setState);
        return () => sub.unsubscribe();
    }, [observable]);

    return state;
};