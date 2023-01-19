import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import Card from './Card';

const Cards = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/homeFoods")
            .then(res => res.json())
            .then(data => setFoods(data.data))
    }, [])
    return (
        <div>
            <div className='grid md:grid-cols-3  gap-y-4'>
                {
                    foods.map(food => <Card
                        key={food._id}
                        food={food}
                    ></Card>)
                },
            </div>

        </div>
    );
};

export default Cards;