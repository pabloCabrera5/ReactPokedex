import { useEffect, useRef, useState } from 'react';


export default function useNearScreen({ externalRef, distance = '300px', threshold = 0.1 } = {}) {

    const [isNearScreen, setNearScreen] = useState(false)
    let internalRef = useRef();
    let observator, observer;
    let options = {
        //root: document.querySelector('#observer'), // element used like viewport to check the visibility (default viewport)
        rootMargin: distance, // margin around the object to observe
        threshold: threshold // % of visibility for the callback function to be executed
    }
    useEffect(() => {
        // if they dont give us a reference we give it to them 
        observator = externalRef ? externalRef.current : internalRef.current;
        const intersecting = (entries) => {

            if (entries[0].isIntersecting) {
                setNearScreen(true);
            } else {
                setNearScreen(false)
            }
        }
        // we load the polifyll of intersectionObserver only if the browser dont have it (IE)
        Promise.resolve(
            typeof (IntersectionObserver) !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(intersecting, options);
            observator && observer.observe(observator);
        })
        /*let observer = new IntersectionObserver(intersecting, options);
        observator && observer.observe(observator);*/
        return () => observer && observer.disconnect();
    })

    return { isNearScreen, ref: observator }
}