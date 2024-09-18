// pages/index.js
import dynamic from 'next/dynamic';

// Dynamically import Map to avoid Next.js server-side rendering issues
const Map = dynamic(() => import('../mapcomponents/Map'), { ssr: false });

const Home = () => {
  const center = [23.2484, 88.4336]; // Coordinates (latitude, longitude)
  const zoom = 13;
  const markerPosition = [23.2484, 88.4336]; // Marker at the same point as the center

  return (
    <div>
      
      <Map center={center} zoom={zoom} markerPosition={markerPosition} />
    </div>
  );
};

export default Home;
