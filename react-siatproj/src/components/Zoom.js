import { useEffect, useState } from "react";
import '../css/home.css'

function Zoom() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [fontSize, setFontSize] = useState(40)
  const [isZoom, setIsZoom] = useState("false");
  useEffect(() => {
    document.body.style.zoom = `${zoomLevel}%`;

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.zoom = '100%';
    };
  }, [zoomLevel]);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 170);
    setFontSize("15px")
    setIsZoom("true")
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => prevZoom - 170);
    setFontSize("40px")
    setIsZoom("false")
  };

  return (
    <div style={{ position: 'fixed', top: '85%', right: '10px', zIndex: '9999' }}>
      {/* Zoom buttons */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {isZoom === "true" ? (
          <button className='btn btn-warning' onClick={handleZoomOut} style={{fontSize:fontSize}}>화면 축소</button>
        ) : (
          <button className='btn btn-danger' onClick={handleZoomIn} style={{fontSize:fontSize, padding:"20px 30px", marginRight:"16px", borderRadius:"20px"}}>화면 확대</button>
        )}
      </div>
    </div>
  )
}
export default Zoom;