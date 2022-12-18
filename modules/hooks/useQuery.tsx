import { useContext, useEffect, useState } from "react";
import PocketbaseContext from "../PocketbaseContext";
import { Movie } from "../types/Movie";
export enum QUERY_TYPE {
    ALL,
    ONE
}
type QueryOptions = {
    id?: string
}
const useQuery = async (collectionName: string, type: QUERY_TYPE, options: QueryOptions = {}): Movie | Movie[] | null => {
    const pbContext = useContext(PocketbaseContext);
    const data = await pbContext.collection(collectionName).getFullList<Movie>();
    return data;
    // .catch(error => console.log(error));

}
export default useQuery