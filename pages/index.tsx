import { useEffect, useRef } from "react";
import LocationPicker from "../modules/ui/LocationInput";
import SearchCard from "../modules/ui/SearchCard";
import useAlert from '../modules/hooks/useAlert'
import Typography from "../modules/ui/Typography";
export default function Index() {
    const [alert, setAlert] = useAlert();

    useEffect(() => {
        setAlert("Okay")
    })
    return <>
        <section className="bg-red-600 w-full h-screen-3/4 p-8 text-white">
            <Typography level="h1">Travel everywhere on a budget.</Typography>
            <Typography level="h2">Explore travel, find deals, and save for vacations with the best travel planner.</Typography>
            <span>where to: <LocationPicker />
            </span>
        </section>
        <section className="bg-purple-600 w-full min-h-screen-3/4 p-8 text-white">
            <Typography level="h2">Explore the world with us.</Typography>
            <Typography level="h3">Travel guides available for many cities all across the world.</Typography>
            <div className="space-y-3">
            <SearchCard heading="Chicago" subheading="Museums, music halls, and more in the Windy City." imageURL={undefined}/>
            <SearchCard heading="Los Angeles" subheading="The home of Hollywood, glamour, and an unmistakably important cultural spot." imageURL={undefined}/>
            <SearchCard heading="New York" subheading="Everything moves a lot faster in the Big Apple." imageURL={undefined}/>
            <SearchCard heading="Osaka" subheading="A mixture of both tradition and contemporary, Osaka is an important tourist destination." imageURL={undefined}/>
            </div>
        </section>
        <section className="bg-blue-600 w-full p-8 text-white min-h-screen-3/4">
            <Typography level="h2">Know the cost of travel.</Typography>
            <Typography level="h3">Lodging, food, travel... it's all included so you spend less and without debt.</Typography>
            <div className="space-y-3">
            <SearchCard heading="Budget Calculator" subheading="We'll tell you how much to save." imageURL={undefined}/>
            <SearchCard heading="Resource Allocation " subheading="How much can you spend on tourist attractions? On souvenirs?" imageURL={undefined}/>
            <SearchCard heading="Deals" subheading="Travel Credit Cards and other deals can decrease the price. We can track that." imageURL={undefined}/>
            </div>
        </section>
        <section className="bg-orange-500 w-full min-h-screen-3/4 p-8 text-white">
            <Typography level="h2">Always Relevant.</Typography>
            <SearchCard heading="Dynamic Data" subheading="Data from online communities is used to aid your trip." imageURL={undefined} />
            <SearchCard heading="Frequent blog posts" subheading="Need inspiration for a location? Get " imageURL={undefined} />
        </section>
        <footer className="bg-black text-2xl">
            <h1>Plan your flight for free.</h1>
        </footer>
    </>
}