
import { useState } from 'react'
import BotCollection from './BotCollection'

// Code below deals with the Bot Army aspect of the project 
function YourBotArmy({botDataa}){

    const [botArmy, setBotArmy] = useState([])
    const [name, setName] = useState([])
    const [image, setImage] = useState([])

    const botArmys = botDataa.map( bot => 
        <li key = {bot.id}>
            <img src = {bot.avatar_url} />
            {bot.name}
            {bot.id}
            <button onClick = {() => handleAddBotArmy(bot.name, bot.avatar_url)}>Add to Bot Army</button>
            <button onClick = {() => handleRemoveBotArmy(bot.id)}>Remove from Bot Army</button>
        </li>
        )
    
    function handleAddBotArmy(botNam, botImag){
        // meant to add a bot to the 'My Bot Army' section however i haven't been able to make it to work.
        setImage(botImag);
        setName(botNam);
        const bott = {
            avatar_url: image,
            name: name,
        }
        setBotArmy([...botArmy,bott])
    }
    
    function handleRemoveBotArmy(deletingBot){
        // function below is supposed to upload a list of all Army bots excluding the one that has been deleted. I haven't been able to make it work though.
        const newList = botArmys.filter(bots => (bots.id) !== (deletingBot))
        setBotArmy(newList)

    }


    return (
        <div>
            <h1>Bot Army Options</h1>
            <ul>
                {botArmys}
            </ul>
            <h1>My Bot Army</h1>
            <ul>
                {botArmy}
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <h1>Bot Collection</h1>
            <BotCollection/>
        </div>
    )

}


export default YourBotArmy;
