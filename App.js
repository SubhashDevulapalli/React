import React from "react";
import ReactDOM from "react-dom/client";

// - Header
// -- Logo
// -- Nav Items
// - body
// -- Search
// -- RestaurantCardContainer
// --- RestaurantCards
// ---- Img
// ---- Name of restaurant, rating, cuisine, delivery time
// - Footer
// -- Copyright
// -- links
// -- Address
// -- Contacts

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, dishName, rating, deliveryTime } = resData? resData : {};
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="Biryani image"
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEwL3Jhd3BpeGVsb2ZmaWNlNF90b3Bfdmlld19vZl9hX3Bha2lzdGFuX2NoaWNrZW5fYmlyeWFuaV9mb29kX2Rpc19kMjQzYjY1Zi1iN2U4LTQwMmItOGY5Yi1mMzQ3YTliYTE0ZTYucG5n.png"
      ></img>
      <h3>{resName}</h3>
      <h4>{dishName}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  const restaurantList = [
    {
      resName: "Subbayya Gaari Bhojanam",
      dishName: "Thali",
      rating: "4.5",
      deliveryTime: "30 mins",
    },
    {
      resName: "Paradise",
      dishName: "Biryani",
      rating: "4.6",
      deliveryTime: "45 mins",
    },
    {
      resName: "Udipi",
      dishName: "Tiffin",
      rating: "4.7",
      deliveryTime: "25 mins",
    },
    {
      resName: "Viyyalavari Vindu",
      dishName: "Tiffin",
      rating: "4.7",
      deliveryTime: "25 mins",
    },
  ];
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {restaurantList.map((restaurantElement) => (
          <RestaurantCard key = { restaurantElement.resName} resData={restaurantElement} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
//rendering the component
root.render(<AppLayout />);
