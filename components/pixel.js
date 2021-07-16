import { useEffect } from "react";

export default function Pixel(props) {
    const { color, position, flip, } = props;
    const { x, y } = position;
    const width     = 50;
    const height    = 50;

    function animateThenFlip() {
        flip();
    }

    return (
        <>
            <div className='pixel' onClick={animateThenFlip}>pixel</div>
            <style jsx>{`
                .pixel {
                    position: fixed;
                    left: ${x}px;
                    top: ${y}px;
                    border: 1px solid black;
                    width: ${width}px;
                    height: ${height}px;
                    background-color: ${color};
                }
            `}</style>
        </>
    )
}