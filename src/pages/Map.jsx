import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import * as cityPoint from '../city-point.json'
import { Icon } from "leaflet";
import '../App.css';
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";

export const icon = new Icon({
    iconRetinaUrl: './src/assets/marker-icon-2x.png',
    iconUrl: './src/assets/marker-icon.png',
    shadowUrl: './src/assets/marker-shadow.png'
});

const Map = () => {
    const position = [-2.600029, 118.015776];
    return (
        <div className="App">
            <MapContainer
                center={position}
                zoom={5}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {cityPoint.features.map(city => (
                    <Marker
                        key={city.id}
                        position={[
                            city.geometry.coordinates[1],
                            city.geometry.coordinates[0]
                        ]}
                        icon={icon}
                    >
                        <Tooltip direction="top" offset={[10, 0]}>
                            <p>{city?.properties?.Code}</p>
                            <span style={{ fontSize: 14, fontWeight: "bold" }}>
                                {city?.properties?.Name}
                            </span>
                        </Tooltip>
                    </Marker>
                ))}
            </MapContainer>
            <div className="sidebar">
                <div className="mb-20">
                    <p class="underline underline-offset-1 text-md md:font-bold">
                        Attendance Office History
                    </p>
                    <LineChart />
                </div>
                <div>
                    <p class="underline underline-offset-1 text-md md:font-bold">
                        Employee Information
                    </p>
                    <BarChart />
                </div>
            </div>
        </div>
    )
}

export default Map