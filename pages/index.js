import { useEffect, useState } from 'react';
import Pixel from '../components/pixel';

export default function Home() {
  const frontColor = 'black';
  const backColor = 'green';
  const pixelScale = 50;
  const gridWidth = 5;
  const gridHeight = 5;
  const [ pixels, setPixels ] = useState(generateBasePixels());
  
  function generateBasePixels() {
    let basePixels = [];
    for (let x = 0; x < gridWidth; x++) {
      let basePixelRow = [];
      for (let y = 0; y < gridHeight; y++) {
        basePixelRow.push(true);
      }
      basePixels.push(basePixelRow);
    }
    return basePixels;
  }

  function togglePixel(x, y) {
    let newPixels = [...pixels];
    newPixels[x][y] = !newPixels[x][y];
    setPixels(newPixels);
  }

  function getPixelStatus(x, y) {
    return pixels[x][y]
  }

  function generatePixelRow(y) {
    let pixelRow = [];
    for (let x = 0; x < gridWidth; x++) {
      let key = y*gridWidth + x;
      pixelRow.push(<Pixel key={key} color={getPixelStatus(x, y) ? frontColor : backColor} position={{x: x, y: y}} scale={pixelScale} flip={togglePixel} />)
    }
    return pixelRow;
  }

  let pixelGrid = [];
  for (let y = 0; y < gridHeight; y++) {
    pixelGrid.push(generatePixelRow(y));
  }

  return (
    <>
      {pixelGrid}
      <style jsx>{`
        
      `}</style>
    </>
  )
}
