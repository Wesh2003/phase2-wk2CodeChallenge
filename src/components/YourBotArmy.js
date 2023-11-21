

// Code below deals with the Bot Army aspect of the project 
function YourBotArmy({botDataa}){

    const [botArmy, setBotArmy] = useState([])

    const botArmys = botDataa.map( bot => 
        <li key = {bot.id}>
            {bot.name}
            <button onClick = {handleAddBotArmy}>Add to Bot Army</button>
            <button onClick = {handleRemoveBotArmy}>Remove from Bot Army</button>
        </li>
        )
    
    function handleAddBotArmy(bot){
        setBotArmy(...botArmy, bot)
    }
    
    function handleRemoveBotArmy(bot){
        const newList = botArmys.filter(bots => parseInt(bots.id) !== parseInt(bot.id))
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
        </div>
    )

}


export default YourBotArmy;
