import L from 'leaflet';
import { MapContainer, TileLayer, useMapEvent, Marker } from "react-leaflet"

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
//import coordinateDTO from './coordinates.model'
import { useState } from "react";
import { coordinateDTO } from './coordinateDTO.model';

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps){
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>(props.coordinates);
    return(
        <MapContainer center={[50.018673, 21.969267]} zoom={14}
            style={{height: props.height}}
        >
            <TileLayer attribution="React Movies"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClick setCoordinates={coordinates=>{
                    setCoordinates([coordinates])
                    props.handleMapClick(coordinates);
                }}
            />
            {coordinates.map((coordinates,idx)=><Marker key={idx} position={[coordinates.lat, coordinates.lng]} />)}
        </MapContainer>
    )
}

function MapClick(props:mapClickProps){
    useMapEvent('click',eventArgs=>(  //useMapEvent react hook in leaflet
        props.setCoordinates({lat:eventArgs.latlng.lat, lng:eventArgs.latlng.lng})
    ))
    return null;
}

interface mapClickProps{
    setCoordinates(coordinates:coordinateDTO) : void
}

interface mapProps{
    height:string,
    coordinates:coordinateDTO[],
    handleMapClick(coordinates: coordinateDTO):void,
}

Map.defaultProps = {
    height:'500px'
}