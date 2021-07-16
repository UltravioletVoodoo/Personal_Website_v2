import { useState } from 'react';
import Pixel from '../components/pixel';

export default function Home() {
  let [ pixels, setPixels ] = useState([true]);

  function togglePixel() {
    setPixels([!pixels[0]]);
  }

  return (
    <>
      <Pixel color={pixels[0] ? 'blue' : 'red'} position={{x: 50, y: 50}} flip={togglePixel} />
      <style jsx>{`
        
      `}</style>
    </>
  )
}
