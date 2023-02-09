import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const mapOptions = {
  zoom: 40,
  center: {
    lat: 40.6848651,
    lng: -73.9444802,
  }
};

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const center = useMemo(() => ({ lat: 40.68488, lng: -73.9444802 }), []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="z-20 mx-8 h-screen items-center justify-center space-y-8 overflow-hidden pt-32 pb-8 xl:mx-10">
      <GoogleMap
        options={mapOptions}
        mapContainerClassName="w-auto h-full rounded-xl"
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}

export default Map;
