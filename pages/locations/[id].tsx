import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react"
import PocketbaseContext from "../../modules/PocketbaseContext"
import useUser from "../../modules/hooks/useUser";

const ViewMoviePage = () => {
    const user = useUser();
    const router = useRouter();
    const {id} = router.query;
    const [movie, setMovie] = useState(null)


    return(
        <>
            {JSON.stringify(movie)}
            {JSON.stringify(user?.collectionId)};   
        </>
    )
}
export default ViewMoviePage;