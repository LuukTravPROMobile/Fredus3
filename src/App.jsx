import React, { Component } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Header from "./Header";
import Card from "./Card";
import AddressMap from "components/AddressMap"; // Import de AddressMap component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      loading: true,
      error: null,
    };
  }

  // Haal de data op van de API
  componentDidMount() {
    this.getList();
  }

  // Functie om de data van de API op te halen
  async getList() {
    try {
      const response = await axios.get(
        "https://travpro.yourworldapps.nl/API/app/v2/listings.php?app=1435&lat1=36.5098445064823&lat2=35.74337885497288&lon1=-114.83208606646728&lon2=-115.48191020892334?category=&query="
      );
      this.setState({
        hotels: response.data, // de API geeft een lijst met hotels terug
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }

  render() {
    const { hotels, loading, error } = this.state;

    if (loading) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="app">
        <Header />

        {/* Voeg de AddressMap component toe en geef de hotels door */}
        <AddressMap hotels={hotels} />

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
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

