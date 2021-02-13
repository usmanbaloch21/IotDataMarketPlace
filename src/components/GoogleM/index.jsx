import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useState } from "react";

const GoogleM = ({ postCodes }) => {
  const [center, setCenter] = useState({ lat: 51.509865, lng: -0.118092 });
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };
  return (
    <LoadScript googleMapsApiKey="YOUR API KEY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={6} center={center}>
        {postCodes?.map((item, index) => {
          return (
            <Marker
              key={index}
              position={{
                lat: parseFloat(item.Latitude),
                lng: parseFloat(item.Longitude),
              }}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleM;
