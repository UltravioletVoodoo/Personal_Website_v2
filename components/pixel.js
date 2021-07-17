export default function Pixel(props) {
    const { color, position, scale, flip, } = props;
    const { x, y } = position;

    function animateThenFlip() {
        flip(x, y);
    }

    return (
        <>
            <div className='pixel' onClick={animateThenFlip}></div>
            <style jsx>{`
                .pixel {
                    position: fixed;
                    left: ${(x)*scale}px;
                    top: ${(y)*scale}px;
                    border: 1px solid black;
                    width: ${scale}px;
                    height: ${scale}px;
                    background-color: ${color};
                }
            `}</style>
        </>
    )
}