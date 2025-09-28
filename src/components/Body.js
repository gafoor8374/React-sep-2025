import ResturantCardList from "./ResturantCardList";
import resList from "../Utilis/mockdata";
import { useState } from "react";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState(resList);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterResturants = listOfResturants.filter(
              (res) => res.card.card.info.avgRating > 4.3
            );
            // console.log(listOfResturants);
            setListOfResturants(filterResturants);
          }}
        >
          Fillter Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfResturants.map((resturant) => {
          return (
            <ResturantCardList
              key={resturant.card.card.info.id}
              resData={resturant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
