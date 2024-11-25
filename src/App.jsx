import React, { Component } from "react";
import Card from "./components/card/Card";
import axios from "axios";
import Header from "./components/PopUpHeader/PopUpHeader";
import "./App.css";
import AddressMap from "./components/AddressMap/AddressMap";
import Spinner from "./components/Spinner/Spinner";
import { BasicChat } from "@ebereplenty/chatbot";


class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      loading: true, // Start loading true to fetch data immediately
      error: null,
    };
  }

  // Call the function to get the data when the component mounts
  componentDidMount() {
    this.getList();
  }

  // Function to get the data from the API
  async getList() {
    try {
      const response = await axios.get(
        "https://travpro.yourworldapps.nl/API/app/v2/listings.php?app=1435&lat1=36.5098445064823&lat2=35.74337885497288&lon1=-114.83208606646728&lon2=-115.48191020892334?category=&query="
      ); // Replace with your API endpoint

      this.setState({
        hotels: response.data, // the API returns an array of listings
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message, // Set error message if the request fails
      });
    }
  }

  render() {
    const { hotels, loading, error } = this.state;

    // Return loading message if data is still being fetched
    if (loading) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }

    // Return error message if data cannot be fetched
    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="app">
        {/* Add the Header component here */}
        <Header />

        {/* Map Component */}
        <AddressMap hotels={hotels} />

        {/* Cards Section */}
        <div className="card-container">
          {hotels.map((hotel, index) => {
            return (
              <Card
                key={index}
                bedrijfsnaam={hotel.company}
                city={hotel.city}
                state={hotel.state}
                addr1={hotel.addr1}
                web_url={hotel.web_url}
                phone={hotel.phone}
                number={String(index + 1)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
