import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import useQuery, { QUERY_TYPE } from "../../modules/hooks/useQuery";
import PocketbaseContext from "../../modules/PocketbaseContext";
import { City } from "../../modules/types/City";
import Typography from "../../modules/ui/Typography";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export default function BlogIndex() {
    const cities = useQuery<City>("cities", QUERY_TYPE.ALL);

    return (
        <>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <div className="p-3 max-w-3xl mx-auto space-y-3">
                {cities?.map(city => (
                    <>
                        <Typography level="h1">{city.name}</Typography>
                        <Typography level="h2">{city.description}</Typography>
                        <Link href={`explore/${city.id}`}>Explore More</Link>
                    </>
                ))}
            </div>
        </>
    )
}