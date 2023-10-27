import React from 'react'
import { useEffect, useState } from "react";
const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];


const Task1 = () => {
    const [Country, setCountry] = useState("")

    const handleCountry = (e) => {
        setCountry(e.target.value)
    }

    return (
        <>
            {/* 1st DropDown */}
            <select
                value={Country}
                onChange={handleCountry}
            >
                <option value="">Select Country</option>
                {countries.map((item) => (
                    <option key={item.value} value={item.value}>{item.name}</option>
                ))}
            </select>

            {/* 2nd Dropdown */}
            {Country && (
                <select>
                    {countries 
                        .find((item) => item.value === Country)
                        .cities.map((city, index) => (
                            <option key={index} value={index}>{city}</option>
                        ))}
                </select>
            )}
        </>
    )
}

export default Task1;