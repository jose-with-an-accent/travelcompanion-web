import { Card } from "antd";
import Link from "next/link";
import { useContext, useEffect, useState } from "react"
import PocketbaseContext from "../modules/PocketbaseContext"
import useQuery, { QUERY_TYPE } from "../modules/hooks/useQuery";
import {Movie} from '../modules/types/Movie'
export default function Home() {
    const movies = useQuery('movies', QUERY_TYPE.ALL);
    console.log(movies);
    return(
        <>
        <h1>This is home!</h1>
        {/* {movies.map((movie: Movie) => (
            <Card title={movie.name} >
                <p>{movie.description}</p>
                <p>Released {movie.releaseDate}</p>
                <p>{movie.starRating} stars</p>
                <Link href={`/movies/${movie.collectionId}`}>View Movie Details</Link>
            </Card>
            ))} */}
        </>
    )
}