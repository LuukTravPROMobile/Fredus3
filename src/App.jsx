import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import Card from "./components/Card";
import AddressMap from "./components/AddressMap";

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get(
          "https://travpro.yourworldapps.nl/API/app/v2/listings.php?app=1435&lat1=36.5098445064823&lat2=35.74337885497288&lon1=-114.83208606646728&lon2=-115.48191020892334?category=&query="
        );
        setHotels(response.data); // Set hotels state
      } catch (err) {
        setError(err.message); // Set error state
      } finally {
        setLoading(false); // Set loading to false after data fetch
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

      {/* Pass selectedHotel and setSelectedHotel to AddressMap */}
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

export default App;
