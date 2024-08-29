import React, { useState } from 'react';
import './Main.css';
import Profile from './profile';
import axios from 'axios'; 

function Main({ userData, updateUserData }) {  
    const [userCoin, setUserCoin] = useState(userData.coin); 

    const coinUpBtn = async () => {
        const newCoinValue = userCoin + 1;  

        setUserCoin(newCoinValue);
        try {
           
            await axios.post('http://localhost:3001/update-coin', {
                username: userData.username,
                coin: newCoinValue
            });

            
            updateUserData({ ...userData, coin: newCoinValue });
        } catch (error) {
            console.error('Error updating coin:', error);
        }
    };

    return (
        <div className='main'>
            <Profile />
            <div className='coinUp' onClick={coinUpBtn}>
                Coin Up
            </div>
            <div className='userInfo'>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Coin</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{userData.username}</td>
                            <td>{userCoin}</td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Main;
