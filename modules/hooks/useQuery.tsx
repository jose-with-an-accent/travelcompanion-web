import { useContext, useEffect, useState } from "react";
import PocketbaseContext from "../PocketbaseContext";
export enum QUERY_TYPE {
    ALL,
    ONE
}
type QueryOptions = {
    id: string
};
function useQuery<T>(collectionName: string, type: QUERY_TYPE, options?: QueryOptions): T | T[] | undefined {
    const pbContext = useContext(PocketbaseContext);
    const [data, setData] = useState<T | T [] | undefined>();

    useEffect(() => {
        if (type === QUERY_TYPE.ALL) {
            pbContext.collection(collectionName).getFullList<T>()
            .then(d => setData(d))
            .catch(error => console.error("Error getting data:" + error));
    
        }
        else {
            pbContext.collection(collectionName).getOne<T>(options)
            .then(d => setData(d))
            .catch(error => console.error("Error getting data:" + error));
    
        }
    }, [])
    let error = null;
    return data;

}
export default useQuery;