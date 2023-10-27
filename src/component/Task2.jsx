import React from 'react';
import  {useState} from 'react'

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];


const Task2 = () => {
  const [Country, setCountry] = useState("")

  const handleCountry = (e) => {
    setCountry(e.target.value)
  }

  return (
    <>
      {/* 1st Dropdown */}
      <select
        value={Country}
        onChange={setCountry}>

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

export default Task2

// import React, { useState } from 'react';

// const countries = [
//   { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
//   { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
//   { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
// ];

// const Task2 = () => {
//   const [country, setCountry] = useState("");
//   const [city, setCity] = useState("");

//   const handleCountryChange = (e) => {
//     setCountry(e.target.value);
//     setCity(""); // Reset the city when the country changes
//   }

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//   }

//   return (
//     <div>
//       {/* 1st Dropdown */}
//       <select value={country} onChange={handleCountryChange}>
//         <option value="">Select Country</option>
//         {countries.map((item) => (
//           <option key={item.value} value={item.value}>{item.name}</option>
//         ))}
//       </select>

//       {/* 2nd Dropdown */}
//       {country && (
//         <select value={city} onChange={handleCityChange}>
//           {/* <option value="">Select City</option> */}
//           {countries.find((item) => item.value === country).cities.map((city, index) => (
//             <option key={index} value={city}>{city}</option>
//          ) )}
//         </select>
//       )}
//     </div>
//   );
// };

// export default Task2;
