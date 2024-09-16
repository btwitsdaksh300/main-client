// src/components/FruitList.js

import React, { useEffect, useState } from 'react';
import { getFruits } from '../services/fruitService'; 
import './FruitList.css'; 

const FruitList = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        const fetchFruits = async () => {
            try {
                const data = await getFruits();
                setFruits(data);
            } catch (error) {
                console.error('Failed to fetch fruits:', error);
            }
        };

        fetchFruits();
    }, []);

    return (
        <div className="fruit-list">
            {fruits.length > 0 ? (
                fruits.map(fruit => (
                    <div key={fruit.id} className="fruit-card">
                        <h2>{fruit.name}</h2>
                        <p>Color: {fruit.color}</p>
                        <p>{fruit.description}</p>
                    </div>
                ))
            ) : (
                <p>Loading fruits...</p>
            )}
        </div>
    );
};

export default FruitList;
