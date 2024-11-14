"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Card = _interopRequireDefault(require("./components/card/Card"));
var _axios = _interopRequireDefault(require("axios"));
var _PopUpHeader = _interopRequireDefault(
  require("./components/PopUpHeader/PopUpHeader")
);
require("./App.css");
var _AddressMap = _interopRequireDefault(
  require("./components/AddressMap/AddressMap")
);
var _Spinner = _interopRequireDefault(require("./components/Spinner/Spinner"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ("object" != typeof e && "function" != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
// const AppDupe = () => {
//   const [hotels, setHotels] = useState([]);
//   const [count, setCount] = useState(0);

//   const counter = () => {
//     setCount(count + 1);
//   }

//   const fetchData = () => {
//     // fetch(....)
//     setHotels('data');
//   }

//   useEffect(() => {
//     counter();
//     fetchData()
//   },[])

//   useEffect(() => {
//     fetchData()
//   },[count])

//   return(
//     <div>
//       {!hotels ? 'hotel list is empty' : hotels.map()}
//       <button>doe iets met click en counter</button>
//     </div>
//   )
// }

//class Header extends Card{

//}
//<Card.Header></Card.Header>
// Assuming you have this Card component

class App extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      loading: true,
      // Start loading true to fetch data immediately
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
      const response = await _axios.default.get(
        "https://travpro.yourworldapps.nl/API/app/v2/listings.php?app=1435&lat1=36.5098445064823&lat2=35.74337885497288&lon1=-114.83208606646728&lon2=-115.48191020892334?category=&query="
      ); // Replace with your API endpoint
      this.setState({
        hotels: response.data,
        // the API returns an array of listings
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
      return /*#__PURE__*/ _react.default.createElement(
        "div",
        null,
        /*#__PURE__*/ _react.default.createElement(_Spinner.default, null)
      );
    }

    // Return error message if data cannot be fetched
    if (error) {
      return /*#__PURE__*/ _react.default.createElement(
        "div",
        null,
        "Error: ",
        error
      );
    }
    return /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        className: "app",
      },
      /*#__PURE__*/ _react.default.createElement(_PopUpHeader.default, null),
      /*#__PURE__*/ _react.default.createElement(_AddressMap.default, {
        hotels: hotels,
      }),
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "card-container",
        },
        hotels.map((hotel, index, marker) => {
          return /*#__PURE__*/ _react.default.createElement(_Card.default, {
            key: index,
            bedrijfsnaam: hotel.company,
            city: hotel.city,
            state: hotel.state,
            addr1: hotel.addr1,
            web_url: hotel.web_url,
            phone: hotel.phone,
            number: String(index + 1),
          });
        })
      )
    );
  }
}
var _default = (exports.default = App);
