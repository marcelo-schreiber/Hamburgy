import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

// static
import "leaflet/dist/leaflet.css";
import "../static/styles/pages/burgersMap.css";
import { FaChevronCircleLeft } from "react-icons/fa";
import { Logo } from "../components/Logo";

const hamburguerMarker = Leaflet.icon({
  iconUrl: require("../static/images/map-marker.svg"),
  iconSize: [57.34, 88],
  iconAnchor: [28.67, 68],
  popupAnchor: [0, -60],
});

const userMarker = Leaflet.icon({
  iconUrl: require("../static/images/map-marker-alt-solid.svg"),
  iconSize: [58, 68],
  iconAnchor: [30, 68],
  popupAnchor: [0, -60],
});

interface burguerData {
  id: string;
  name: string;
  address: string;
  opening_hours: string;
  menu: string;
  latitude: number;
  longitude: number;
}

const BurguersMap: React.FC = () => {
  const [userPosition, setUserPosition] = useState<[number, number]>([0, 0]);
  const [burguerPlaces, setBurguerPlaces] = useState<burguerData[]>([]);

  useEffect(() => {
    fetch("https://hamburgy-rest.herokuapp.com/burguer-places")
      .then(x => x.json())
      .then(res => setBurguerPlaces(res));
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setUserPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  return (
    <div className="map-content">
      <aside>
        <header>
          <Link to="/">
            <FaChevronCircleLeft size={30} color="white" />
          </Link>
          <h2>Selecione a hamburgueria de sua preferência.</h2>
        </header>

        <footer>
          <Logo />
        </footer>
      </aside>
      <Map center={userPosition} zoom={17} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibG9zYWVnIiwiYSI6ImNrZ2VhY2d4NTE4dDAyem1pdTY2ZXAzdHcifQ.xK8exrLdW6U12asN5H4koA`}
        />
        <Marker position={userPosition} icon={userMarker}>
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="popup">
            <div className="popup-bar-inside"></div>
            <p>Você está aqui.</p>
          </Popup>
        </Marker>
        {burguerPlaces.length > 0 &&
          burguerPlaces.map(restaurant => {
            return (
              <Marker
                position={[restaurant.latitude, restaurant.longitude]}
                icon={hamburguerMarker}
                key={restaurant.id}>
                <Popup
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="popup">
                  <div className="popup-bar-inside-closest"></div>
                  <p>
                    <Link to={`/burger-details/${restaurant.id}`}>{restaurant.name}</Link>
                  </p>
                </Popup>
              </Marker>
            );
          })}
      </Map>
    </div>
  );
};

export default BurguersMap;
