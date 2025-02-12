"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

interface Competition {
  name: string;
  location: [number, number];
  date: string;
}

interface DynamicMapProps {
  competitions: Competition[];
  setActiveCompetition: (competition: Competition | null) => void;
}

export default function DynamicMap({
  competitions,
  setActiveCompetition,
}: DynamicMapProps) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {competitions.map((competition, index) => (
        <Marker
          key={index}
          position={competition.location}
          eventHandlers={{
            click: () => setActiveCompetition(competition),
          }}
        >
          <Popup>
            <div>
              <h3 className="font-bold">{competition.name}</h3>
              <p>Date: {competition.date}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
