import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PantoneCard from '../components/PantoneCardPink';

function SignUp() {
    return (
        <div className="signUpContainer">
            <div className="signUpHeader">
                <h1>Sign Up</h1>
            </div>

            <div className='pantoneCardsContainer'>
                {/* 12 Pantone Card Grid */}
                <PantoneCardPink />
                {/* <PantoneCard />
                <PantoneCard />
                <PantoneCard />
                <PantoneCard />
                <PantoneCard />
                <PantoneCard />
                <PantoneCard />
                <PantoneCard />
                <PantoneCard />
                <PantoneCard />
                <PantoneCard /> */}
            </div>

        </div>
    );

}

export default SignUp;