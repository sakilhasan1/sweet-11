import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ food }) => {

    const { _id, title, img, price, description } = food
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl'>Price: {price}</p>
                <p >{
                    description.length > 100 ?
                        <>
                            {description.slice(0, 100) + '...'} <Link className='underline' to={`/service/${_id}`}>Read more</Link>
                        </>
                        : description
                }</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add to service</button>
                </div>
            </div>
        </div>
    );
};

export default Card;