import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import AddressMap from "./components/AddressMap";

// API URL as a constant to make the code cleaner and easier to maintain
const API_URL = "https://travpro.yourworldapps.nl/API/app/v2/listings.php?app=1435&lat1=36.5098445064823&lat2=35.74337885497288&lon1=-114.83208606646728&lon2=-115.48191020892334?category=&query=";

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get(API_URL);
        setHotels(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getList();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Show spinner while loading
  if (loading) return <Spinner />;
  // Show error message if there is an error
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app">
      <Header />
      <AddressMap hotels={hotels} selectedHotel={selectedHotel} />
      <div className="card-container">
        {hotels.map((hotel, index) => (
          <Card
            key={index}
            bedrijfsnaam={hotel.company}
            city={hotel.city}
            state={hotel.state}
            addr1={hotel.addr1}
            web_url={hotel.web_url}
            phone={hotel.phone}
            number={String(index + 1)}
            onClick={() => setSelectedHotel(hotel)} // Handle hotel selection
          />
        ))}
      </div>
    </div>
  );
};

// The Card component that displays hotel information
const Card = ({ bedrijfsnaam, city, state, addr1, web_url, phone, number, onClick }) => (
  <div className="card" onClick={onClick}>
    <h3>{`${number}. ${bedrijfsnaam}`}</h3>
    <p>{city}, {state}</p>
    <p>{addr1}</p>
    {web_url && <a href={web_url} target="_blank" rel="noopener noreferrer">Visit Website</a>}
    {phone && <p>Phone: {phone}</p>}
  </div>
);

export default App;

