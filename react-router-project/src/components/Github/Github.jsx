import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData();
    // const [followers, setFollowers] = useState(0);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Nasreen027')
    //     .then((resp)=> resp.json())
    //     .then((data)=> setFollowers(data.followers))
    // },[]);

    return (
        <>Github Followers: {data}</>
    )
}

export default Github
export const getGithubData = async () => {
    const response = await fetch('https://api.github.com/users/Nasreen027');
    const data = await response.json();
    return data.followers;
}