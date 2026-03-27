import React, { Suspense, use, useState } from 'react';
import AvailablePlayerCard from '../availblePlayerCard/AvailablePlayerCard';
import SelectedPlayers from '../selected/SelectedPlayers';
import { toast } from 'react-toastify';

const Available = ({ availableData, balance, setBalance }) => {
    const [active, setActive] = useState('available')

    const [selectedPlayer, setSelectedPlayers] = useState([])

    const handleSelectedPlayers = (player) => {
        setSelectedPlayers([...selectedPlayer, player])
    }
    
    const [count, setCount] = useState()

    const handleActive = (tab) => {
        setActive(tab)
    }


    (selectedPlayer.length > 11 && toast.warning("You have already enough players") )

    const availableDataPromis = use(availableData)
    const availablePlayerData = availableDataPromis.data;

    const plyersCount = availablePlayerData.length

    return (
        <div className='container mx-auto mt-12'>
            <div className=' flex justify-between mb-4'>
                <h2 className='text-3xl font-bold'>
                    {active === 'available'
                        ? `Available Players (${plyersCount})`
                        : `Selected Players (${selectedPlayer.length} of ${plyersCount})`}
                </h2>
                <div className=' flex '>
                    <button
                        onClick={() => handleActive('available')}
                        className={`btn rounded-r-none rounded-l-2xl ${active === 'available' && "btn-accent"}`}>
                        Available
                    </button>
                    <button
                        onClick={() => handleActive("selected")}
                        className={`btn rounded-l-none rounded-r-2xl ${active === "selected" && 'btn-accent'}`}>
                        Selected
                    </button>
                </div>
            </div>
            {
                active === 'available'
                    ? <div className=' grid grid-cols-4 gap-6'>
                        {
                            availablePlayerData.map(player =>
                                <AvailablePlayerCard balance={balance}
                                    setBalance={setBalance}
                                    key={player.id}
                                    player={player}
                                    handleSelectedPlayers={handleSelectedPlayers} 
                                    selectedPlayer={selectedPlayer}/>)
                        }
                    </div>
                    : <SelectedPlayers count={count} setCount={setCount} selectedPlayer={selectedPlayer} />
            }

        </div>
    );
};

export default Available;