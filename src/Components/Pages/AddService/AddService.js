import React, { useEffect, useState } from 'react';

const AddService = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then(res => res.json())
            .then(data => setFoods(data.data))
    }, [])

    console.log(foods)
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        foods.map(food => {
                            return (
                                <tr>
                                    <td>1</td>
                                    <td><img className='h-12' src={food.img} alt="" /></td>
                                    <td>{food.title}</td>
                                    <td>{food.price}</td>
                                    <td><button type="submit" className="btn bg-danger">Delete</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AddService;