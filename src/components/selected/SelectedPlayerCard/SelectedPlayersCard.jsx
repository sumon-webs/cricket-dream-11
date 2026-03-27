import { Trash, Volleyball } from 'lucide-react';
import React from 'react';

const SelectedPlayersCard = ({ player }) => {
    const allRounder = player.role === "All-Rounder"
    const batsman = player.role === "Batsman"
    const bowler = player.role === "Bowler"
    const wicketkeeper = player.role === "Wicketkeeper"

    const battingStyle = player.battingStyle
    const bowlingStyle = player.bowlingStyle
    return (
        <div className=' flex justify-between items-center border border-blue-100 rounded-[5px] p-3 '>
            <div className='flex space-x-6 space-y-3'>
                <img className=' w-30 h-28' src={player.image} alt={`${player.name}'s photo`} />
                <div className='  space-y-2'>
                    <h3 className=' text-3xl'>{player.name}</h3>
                    <p className=''>{player.role}</p>
                    {allRounder ? (
                        <>
                            <div className=' text-[10px]'>
                                <p>Bat: {battingStyle}</p>
                                <p>Ball: {bowlingStyle}</p>
                            </div>
                        </>)
                        : batsman ? (
                            <>
                                <div className=' text-[10px]'>
                                    <p>Bat: {battingStyle}</p>
                                </div>
                            </>)
                            : bowler ? (
                                <>
                                    <div className=' text-[10px]'>
                                        <p>Ball: {bowlingStyle}</p>
                                    </div>
                                </>)
                                : wicketkeeper && (
                                    <>
                                        <div className=' text-[10px]'>
                                            <p>Bat: {battingStyle}</p>
                                        </div>
                                    </>
                                )
                    }
                </div>
            </div>
            <Trash className="w-6 h-6 text-white-500 cursor-pointer"></Trash>
        </div>
    );
};

export default SelectedPlayersCard;