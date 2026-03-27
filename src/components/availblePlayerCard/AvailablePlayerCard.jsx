import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AvailablePlayerCard = ({ player, balance, setBalance, handleSelectedPlayers, selectedPlayer }) => {

    const allRounder = player.role === "All-Rounder"
    const batsman = player.role === "Batsman"
    const bowler = player.role === "Bowler"
    const wicketkeeper = player.role === "Wicketkeeper"

    const battingStyle = player.battingStyle
    const bowlingStyle = player.bowlingStyle

    const newBalance = balance - Number(player.price.replace('$', ''));

    const isSelected = selectedPlayer.some(p => p.id === player.id)

    const handleChoseBtn = () => {
        if (newBalance < 0) {
            toast.warning('Not enough money')
            return
        }
        if (!isSelected) {
            toast.success(`${player.name} Choosed`)
            setBalance(newBalance)
            handleSelectedPlayers(player)
        }
    }

    return (
        <div className="card bg-base-100 shadow-sm border-2 border-gray-200">
            <figure>
                <img className='h-[270px] p-4 w-full' src={player.image} alt={`${player.name}'s photo`} />
            </figure>
            <div className="card-body">
                <h1>{player.name}</h1>
                <div className='flex justify-between'>
                    <p>{player.country}</p>
                    <button className='btn'>{player.role}</button>
                </div>
                <div className="divider m-0"></div>
                <p>Rating</p>
                <div className='flex justify-between'>
                    {allRounder ? (
                        <div className='text-[10px]'>
                            <p>Bat: {battingStyle}</p>
                            <p>Ball: {bowlingStyle}</p>
                        </div>
                    ) : batsman ? (
                        <div className='text-[10px]'>
                            <p>Bat: {battingStyle}</p>
                        </div>
                    ) : bowler ? (
                        <div className='text-[10px]'>
                            <p>Ball: {bowlingStyle}</p>
                        </div>
                    ) : wicketkeeper && (
                        <div className='text-[10px]'>
                            <p>Bat: {battingStyle}</p>
                        </div>
                    )}
                </div>
                <div className="card-actions justify-end">
                    <p>{player.price}</p>
                    <button
                        className="btn btn-primary"
                        onClick={handleChoseBtn}
                        disabled={isSelected}
                    >
                        {isSelected ? "Selected" : "Chose player"}
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AvailablePlayerCard;