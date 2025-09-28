import { RES_LOGO } from "../Utilis/constants";

const ResturantCardList = (props) =>{
   // console.log(props);

   // const {resname, cusines, rating} = props; //destructuring

   const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = props?.resData?.card?.card?.info;
   const {deliveryTime} = props?.resData?.card?.card?.info?.sla;
   return (
      <div className="res-card">
         <img className="res-logo" alt= "res-logo" src={RES_LOGO+cloudinaryImageId} />
         <h3>{name}</h3>
         <h4>{cuisines.join(', ')}</h4>
         <h4>{costForTwo}</h4>
         <h4>{avgRating} Stars</h4>
         <h4>{deliveryTime} Mintues</h4>

      </div>
   )
}

export default ResturantCardList;