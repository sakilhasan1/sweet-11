import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Cards = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch("https://sweet-resturent-server.vercel.app/homeFoods")
            .then(res => res.json())
            .then(data => setFoods(data.data))
    }, [])

    return (
        <div>
            <div className='text-center text-xl text-purple-600'>
                <h1>CATEGORIES</h1>
                <h3>Our Services</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />
                    sed do eiusmod tempor incididunt ut labore.

                </p>
            </div>
            <div className='grid md:grid-cols-3  gap-4 ms-3'>
                {
                    foods.map(food => <Card
                        key={food._id}
                        food={food}
                    ></Card>)
                },
            </div>
            <p className='text-center text-2xl'><Link to='/services' >See All</Link></p>
        </div>
    );
};

export default Cards;