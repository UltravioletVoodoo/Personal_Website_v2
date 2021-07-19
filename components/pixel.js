import { useRef, useState } from "react";

export default function Pixel(props) {
    const { color, position, scale, flip, } = props;
    const { x, y } = position;
    const [pixelClasses, setPixelClasses] = useState('pixel')
    const pixelRef = useRef(null);

    function animateThenFlip() {
        flip(x, y);
    }

    function firstHalfFlip() {
        setPixelClasses('pixel flipped');
    }
    
    function secondHalfFlip() {
        flip(x, y);
        setPixelClasses('pixel');
    }

    return (
        <>
            <div 
                ref={pixelRef}
                className={pixelClasses}
                onClick={animateThenFlip}
                onMouseOver={firstHalfFlip}
                onTransitionEnd={secondHalfFlip}
                >
            </div>
            <style jsx>{`
                .pixel {
                    position: fixed;
                    left: ${(x)*scale + scale}px;
                    top: ${(y)*scale + scale}px;
                    border: 1px solid black;
                    width: ${scale}px;
                    height: ${scale}px;
                    background-color: ${color};
                    transition: 0.2s;
                }
                .flipped {
                    transform: rotate3d(1,1,0,90deg)
                }
            `}</style>
        </>
    )
}