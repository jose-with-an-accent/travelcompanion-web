import useQuery, { QUERY_TYPE } from "../../modules/hooks/useQuery";
import useUser from "../../modules/hooks/useUser";
import Typography from "../../modules/ui/Typography";
type ExpensePlan = {
    name: string,
    shared_with: Array<string>,
    owner: string

}
export default function ExpensePlanner() {
    const user = useUser();
    const yourPlans = []//useQuery('expensePlans', QUERY_TYPE.ALL);
    const sharedWithYou = []//useQuery('expensePlans', QUERY_TYPE.ALL);


    return(
        <>
        <Typography level="h1">Plan Expenses</Typography>
        <>
            <Typography level="h2">Your Plans</Typography>
            {yourPlans.length !== 0 ? yourPlans.map(plan => (
            <h1>{plan.name}</h1>
        )) : <Typography level="h4">Create a plan with the + button.</Typography>}
        </>
        <>
        <Typography level="h2">Shared With You</Typography>
        {sharedWithYou.length !== 0 ? sharedWithYou.map(plan => (
            <h1>{plan.name}</h1>
        )) : <Typography level="h4">Shared plans will appear here.</Typography>}
        </>
        <>
            <Typography level="h2">Explore Inspirations</Typography>
        </>
        </>

    )
}