import { useState } from 'react';
import { useEffect } from 'react';
import YourBotArmy from "./YourBotArmy";


// Code below shows the Home and main page of the app
function Home(){

    const [botDataa, setBotDataa] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/bots')
        .then((r) => r.json())
        .then((bots) => setBotDataa(bots))

    }, []);

    return(
        <>
        
            <YourBotArmy botDataa = {botDataa}/>
        </>
    );
}

export default Home