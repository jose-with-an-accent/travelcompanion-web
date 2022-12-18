import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import useQuery, { QUERY_TYPE } from "../../modules/hooks/useQuery";
import PocketbaseContext from "../../modules/PocketbaseContext";
import { City } from "../../modules/types/City";
import Typography from "../../modules/ui/Typography";

export default function BlogIndex() {
    const cities = useQuery<City>("cities", QUERY_TYPE.ALL, {});
    
    return (
        <div className="p-3 max-w-3xl mx-auto space-y-3">
            {cities?.map(city => (
                <>
                    <Typography level="h1">{city.name}</Typography>
                    <Typography level="h2">{city.description}</Typography>
                    <Link href={`explore/${city.id}`}>Explore More</Link>
                </>
            ))}
        </div>
    )
}