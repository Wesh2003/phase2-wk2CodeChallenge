import { useState, useEffect } from 'react'

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
            onDeleteBot(bots)})
      
      }
    
    function onDeleteBot(deletedBot) {

        const updatedBotCollection = bots.filter((item) => item.id !== deletedBot.id)
        setBotData(updatedBotCollection)
    }


    const botProfiles = botData.map( bot => 
        <li key = {bot.id}>
            {bot.name}
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




