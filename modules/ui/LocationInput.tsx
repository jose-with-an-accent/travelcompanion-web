import { ChangeEvent, useEffect, useState } from "react"
import SearchCard from "./SearchCard";
import Typography from "./Typography";

export default function LocationPicker() {
    const [locationQuery, setLocationQuery] = useState<string>('');
    const [locations, setLocations] = useState<Array<Location>>([]);
    const [searchVisible, setSearchVisible] = useState<boolean>();

    const getSearch = async () => {

        const req = await fetch(`/api/locations?name=${locationQuery}`);
        const res = await req.json();

        setLocations(res);
    }
    const onSearch = (e: ChangeEvent) => {
        setLocationQuery(e.target.value);
        getSearch()
    }
    return(
        <div className="space-y-3">
            <input type="text" onFocus={() => setSearchVisible(true)} value={locationQuery} onChange={onSearch} className="text-xl text-black p-3 rounded-lg" />
            {searchVisible && <div className="space-y-1.5 bg-gray-100 shadow-lg w-fit p-2 rounded-md">
            {locationQuery != "" ? locations?.map(area => (
                <SearchCard imageURL={undefined} heading={area.heading} subheading={area.subheading} />
            )) : <h1 className="text-black">Start typing to add a location.</h1>}
            {locations.length == 0 && <Typography level="h6" className="text-black">No locations found.</Typography>}
            </div>}
        </div>
    )
}