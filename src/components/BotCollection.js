import { useState, useEffect } from 'react'

// Code below deals with the entire Bot Collection data e.g the database containing all the bots and their information 
function BotCollection(){

    const [botData, setBotData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/bots')
        .then((r) => r.json())
        .then((bots) => setBotData(bots))

    }, [])

    function handleBotClick() {
        fetch(`http://localhost:3000/bots/${botData.id}`, {
          method: "DELETE",
        })
          .then(r => r.json())
          .then(() => {
            console.log('Deleted from ')
            onDeleteBot(botData.id)})
      
      }
    
    function onDeleteBot(deletedBot) {

        const updatedBotCollection = botData.filter((item) => item.id !== deletedBot.id)
        setBotData(updatedBotCollection)
    }


    const botProfiles = botData.map( bot => 
        <li key = {bot.id}>
            <img src = {bot.avatar_url} alt = "Image Unavailable"/>
            <h1>{bot.name}</h1>
            <p>{bot.health}</p>
            <p>{bot.damage}</p>
            <p>{bot.armor}</p>
            <p>{bot.bot_class}</p>
            <p>{bot.catchphrase}</p>
            <p>{bot.created_at}</p>
            <p>{bot.updated_at}</p>
            <button onClick = {handleAddBotArmy}>Add to Bot Army</button>
            <button onClick = {handleBotClick}>Delete from Collection</button>
        </li>
        )


    return(
        <div>

            <h1>All Bots</h1>
            <ul>
                {botProfiles}
            </ul>
            
        </div>

    )
}


export default BotCollection;




