import { Card, Typography } from "antd";
import { useContext, useEffect, useState } from "react"
import useUser from "../../modules/hooks/useUser";

export default function AccountPage() {
    const [watched, setWatched] = useState<Array<any>>();
    const user = useUser();

    useEffect(() => {
    }, [])
    if (user == null) return <h1>Not logged in</h1>
    return <>
        <Typography.Title level={1}>Welcome {user.name}</Typography.Title>
        <Typography.Title level={3}>Your Watched Movies</Typography.Title>
        {watched?.map(val => (
            <Card>{JSON.stringify(val)}</Card>
        ))}
        <Typography.Title>User Information</Typography.Title>
        {JSON.stringify(user)}
    </>
}