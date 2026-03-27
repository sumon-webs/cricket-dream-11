import React from 'react';
import SelectedPlayersCard from './SelectedPlayerCard/SelectedPlayersCard';

const SelectedPlayers = ({selectedPlayer}) => {



    return (
        <div className=' space-y-6'>
            {
                selectedPlayer.map(player => <SelectedPlayersCard key={player.id} player = {player}/>)
            }
        </div>
    );
};

export default SelectedPlayers;