import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YMap = () => {
  const mapStyle = {
    width: "100%",
    height: "450px",
  };

  const center = [47.2240712, 39.7130366, 17];

  return (
    <YMaps>
      <section id="yandex-map">
        <Map
          className="map"
          defaultState={{ center: center, zoom: 16 }}
          width={100}
          // height={30}
          style={mapStyle}
        >
          <Placemark
            key={""}
            geometry={center}
            options={{
              iconLayout: "default#image",
              iconImageSize: [44, 50],
            }}
          />
        </Map>
      </section>
    </YMaps>
  );
};

export default YMap;
