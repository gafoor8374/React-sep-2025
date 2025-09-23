import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
 return (
   <div className="header">
      <div className="logo-container">
         <img className="logo" src="https://www.shutterstock.com/image-vector/healthy-food-fruits-icon-bundle-600w-1923498728.jpg"/>
      </div>
      <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
         </ul>
      </div>
   </div>
 )
}

const ResturantCardList = (props) =>{
   console.log(props);

   // const {resname, cusines, rating} = props; //destructuring

   const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = props?.resData?.card?.card?.info;
   const {deliveryTime} = props?.resData?.card?.card?.info?.sla;
   return (
      <div className="res-card">
         <img className="res-logo" alt= "res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`+cloudinaryImageId} />
         <h3>{name}</h3>
         <h4>{cuisines.join(',')}</h4>
         <h4>{costForTwo}</h4>
         <h4>{avgRating} Stars</h4>
         <h4>{deliveryTime} Mintues</h4>

      </div>
   )
}
const resList =[ 
{
card: {
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "160087",
name: "Varalakshmi Tiffins",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/6/13/f75ee7b6-e503-450a-927b-4127ff08b728_d96ddc6b-5a48-4c4b-a413-c92e44355f0d.jpg",
locality: "Gachibowli",
areaName: "Gachibowli",
costForTwo: "₹300 for two",
cuisines: [
"South Indian"
],
avgRating: 4.5,
veg: true,
parentId: "6482",
avgRatingString: "4.5",
totalRatingsString: "79K+",
promoted: true,
adTrackingId: "cid=c18c49b8-a866-4f4b-bf66-9a51f617948e~p=0~adgrpid=c18c49b8-a866-4f4b-bf66-9a51f617948e#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=160087~plpr=COLLECTION~eid=d288c7ad-9811-416b-a92c-bef4b0c980fc~srvts=1758652365364~collid=80441",
sla: {
deliveryTime: 27,
lastMileTravel: 5.8,
serviceability: "SERVICEABLE",
slaString: "25-30 mins",
lastMileTravelString: "5.8 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-24 00:30:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-South%20Indian.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-South%20Indian.png"
}
}
]
},
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹166 OFF",
subHeader: "ABOVE ₹449",
discountTag: "FLAT DEAL",
headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.3",
ratingCount: "10K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "c18c49b8-a866-4f4b-bf66-9a51f617948e"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=160087&source=collection&query=Idli",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "240295",
name: "Mana Dosa",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/3/17/f4dc142c-9f2c-492c-92d1-9c2c2efd5307_1d0d0947-5f62-4822-9c68-d015e43d01f3.jpg",
locality: "Shiridi sai nagar",
areaName: "Manikonda",
costForTwo: "₹350 for two",
cuisines: [
"Indian"
],
avgRating: 4.5,
parentId: "131347",
avgRatingString: "4.5",
totalRatingsString: "6.0K+",
promoted: true,
adTrackingId: "cid=62f525e8-56dd-4976-b6b9-749af44855e3~p=0~adgrpid=62f525e8-56dd-4976-b6b9-749af44855e3#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=240295~plpr=COLLECTION~eid=45f80e8f-d0cc-40f6-aac9-166565445f94~srvts=1758652834270~collid=80441",
sla: {
deliveryTime: 33,
lastMileTravel: 9.4,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "9.4 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-24 01:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
}
]
},
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "62f525e8-56dd-4976-b6b9-749af44855e3"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=240295&source=collection&query=Idli",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "832534",
name: "The Bhadrachalam Cafe",
cloudinaryImageId: "6511647e231cf2bfe7d5f0c8c39fd5d8",
locality: "Sri Krishna Nagar",
areaName: "Jubilee Hills",
costForTwo: "₹150 for two",
cuisines: [
"South Indian",
"Juices",
"Tea",
"Coffee",
"Andhra"
],
avgRating: 4.4,
veg: true,
parentId: "494795",
avgRatingString: "4.4",
totalRatingsString: "7.7K+",
promoted: true,
adTrackingId: "cid=5c17dab7-70e8-4987-b54c-0e501a04d3b2~p=1~adgrpid=5c17dab7-70e8-4987-b54c-0e501a04d3b2#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=832534~plpr=COLLECTION~eid=4193e227-c01b-4591-bea4-5cd57dc79b74~srvts=1758652834270~collid=80441",
sla: {
deliveryTime: 32,
lastMileTravel: 5.9,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "5.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-30 00:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textExtendedBadges: { },
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
}
]
}
}
},
aggregatedDiscountInfoV3: {
header: "₹125 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "5c17dab7-70e8-4987-b54c-0e501a04d3b2"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=832534&source=collection&query=Idli",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "324958",
name: "Sri Mahalaxmi Reddy Brothers Tiffins & Fast Food",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/6/26/8f89964e-d8a5-44ae-af65-1fab5b25e584_ffa88060-a095-4f69-8196-01d9652d7953.jpg",
locality: "Mehdipatnam",
areaName: " Manikonda",
costForTwo: "₹200 for two",
cuisines: [
"Chinese",
"South Indian",
"Indian"
],
avgRating: 4.4,
parentId: "194059",
avgRatingString: "4.4",
totalRatingsString: "14K+",
promoted: true,
adTrackingId: "cid=286e52b0-0e1a-4365-bc2c-7edf0307a7ed~p=2~adgrpid=286e52b0-0e1a-4365-bc2c-7edf0307a7ed#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=324958~plpr=COLLECTION~eid=2e23cfad-3a72-4b11-98df-d1a80ef2f70e~srvts=1758652834270~collid=80441",
sla: {
deliveryTime: 42,
lastMileTravel: 6.3,
serviceability: "SERVICEABLE",
slaString: "40-45 mins",
lastMileTravelString: "6.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-30 00:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "10% OFF",
subHeader: "UPTO ₹40",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.1",
ratingCount: "4.1K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "286e52b0-0e1a-4365-bc2c-7edf0307a7ed"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=324958&source=collection&query=Idli",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "405226",
name: "Tirumala Tiffins",
cloudinaryImageId: "ptxmkgg0k8ewaqzfkwtk",
locality: "Serilingampally 1",
areaName: "Kondapur",
costForTwo: "₹100 for two",
cuisines: [
"South Indian"
],
avgRating: 4.1,
parentId: "238385",
avgRatingString: "4.1",
totalRatingsString: "6.4K+",
promoted: true,
adTrackingId: "cid=c8b15306-f731-49ad-afa6-1da27cefcdf8~p=3~adgrpid=c8b15306-f731-49ad-afa6-1da27cefcdf8#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=405226~plpr=COLLECTION~eid=1dd2756d-ebc8-4679-b4dc-6dff84436ab8~srvts=1758652834270~collid=80441",
sla: {
deliveryTime: 28,
lastMileTravel: 6.2,
serviceability: "SERVICEABLE",
slaString: "25-35 mins",
lastMileTravelString: "6.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-24 23:59:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
}
]
},
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹99"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "c8b15306-f731-49ad-afa6-1da27cefcdf8"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=405226&source=collection&query=Idli",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "1050141",
name: "Vrindhavan Kitchens",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/17/d1410856-a704-4223-9ad0-387c33937e60_90583e0b-367e-4c3d-a7d2-e3a247086961.jpeg",
locality: "Gachibowli",
areaName: "Gachibowli",
costForTwo: "₹250 for two",
cuisines: [
"South Indian",
"North Indian",
"Andhra",
"Snacks",
"Healthy Food",
"Indian"
],
avgRating: 4.3,
veg: true,
parentId: "610580",
avgRatingString: "4.3",
totalRatingsString: "388",
promoted: true,
adTrackingId: "cid=e2875bef-47ce-49bc-bb19-3ce96e740e8b~p=4~adgrpid=e2875bef-47ce-49bc-bb19-3ce96e740e8b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1050141~plpr=COLLECTION~eid=b3e464ed-0a84-4ef4-a790-63f37846d6e7~srvts=1758652834270~collid=80441",
sla: {
deliveryTime: 27,
lastMileTravel: 6.3,
serviceability: "SERVICEABLE",
slaString: "25-30 mins",
lastMileTravelString: "6.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-24 13:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textExtendedBadges: { },
textBased: { }
}
},
aggregatedDiscountInfoV3: {
header: "30% OFF",
subHeader: "UPTO ₹75",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "e2875bef-47ce-49bc-bb19-3ce96e740e8b"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=1050141&source=collection&query=Idli",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "1003596",
name: "Harsha Delux Mess",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/11/18/4327ce17-d601-4fdd-adde-fc7bedb9f11c_16a2cf77-ac1e-488e-8420-e02dce024aa3.jpg",
locality: "Jubilee Hills",
areaName: " HITEC City",
costForTwo: "₹300 for two",
cuisines: [
"South Indian"
],
avgRating: 4.2,
parentId: "584962",
avgRatingString: "4.2",
totalRatingsString: "1.0K+",
promoted: true,
adTrackingId: "cid=23363f8e-3a59-4527-bc4d-99675687e631~p=5~adgrpid=23363f8e-3a59-4527-bc4d-99675687e631#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1003596~plpr=COLLECTION~eid=0fc87cb0-9176-4687-907f-e1dd92bd3d63~srvts=1758652834270~collid=80441",
sla: {
deliveryTime: 19,
lastMileTravel: 2.2,
serviceability: "SERVICEABLE",
slaString: "15-20 mins",
lastMileTravelString: "2.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-24 01:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
}
]
},
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "23363f8e-3a59-4527-bc4d-99675687e631"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=1003596&source=collection&query=Idli",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "565084",
name: "Palleturi Dosa",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/4/88f7be9e-87b0-438e-93f0-394aa5e5f752_f22f64f2-2427-4b62-bc91-b26c05e94f78.jpg",
locality: "Dlf Road",
areaName: "Gachibowli",
costForTwo: "₹100 for two",
cuisines: [
"South Indian",
"Beverages"
],
avgRating: 4,
veg: true,
parentId: "154048",
avgRatingString: "4.0",
totalRatingsString: "3.5K+",
promoted: true,
adTrackingId: "cid=e4574935-e15d-4118-ab11-536662696f3c~p=7~adgrpid=e4574935-e15d-4118-ab11-536662696f3c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=565084~plpr=COLLECTION~eid=b9827cc1-de9e-4da9-977c-da7b5bca49d7~srvts=1758652834270~collid=80441",
sla: {
deliveryTime: 28,
lastMileTravel: 4.7,
serviceability: "SERVICEABLE",
slaString: "25-30 mins",
lastMileTravelString: "4.7 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-24 03:30:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textExtendedBadges: { },
textBased: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹9",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "e4574935-e15d-4118-ab11-536662696f3c"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=565084&source=collection&query=Idli",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "594121",
name: "Sizzling Schezwan",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/30/f4cbec0c-e68f-4bd2-a89b-0afa81b10cbd_594121.ss.jpg",
locality: "Telecom Nagar Colony",
areaName: "Gachibowli",
costForTwo: "₹400 for two",
cuisines: [
"Indian",
"Thalis",
"Chinese"
],
avgRating: 4.1,
parentId: "479301",
avgRatingString: "4.1",
totalRatingsString: "424",
promoted: true,
adTrackingId: "cid=5d96b07f-f7cd-41cf-8e23-77324023ca5e~p=8~adgrpid=5d96b07f-f7cd-41cf-8e23-77324023ca5e#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=594121~plpr=COLLECTION~eid=01a3c6aa-2045-4a27-a881-460ed5a53185~srvts=1758652834270~collid=80441",
sla: {
deliveryTime: 31,
lastMileTravel: 6.9,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "6.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-24 01:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "50% OFF",
subHeader: "UPTO ₹100",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "5d96b07f-f7cd-41cf-8e23-77324023ca5e"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=594121&source=collection&query=Idli",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "1076476",
name: "Utishta Pure Veg",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/6/5/158468a0-6239-400a-adad-2fc027bbb72f_7b382fff-e1af-4279-b374-c31198dfb001.jpg",
locality: "Film Nagar",
areaName: "Film Nagar",
costForTwo: "₹350 for two",
cuisines: [
"Desserts",
"South Indian",
"Beverages"
],
avgRating: 4.3,
veg: true,
parentId: "628448",
avgRatingString: "4.3",
totalRatingsString: "34",
promoted: true,
adTrackingId: "cid=0f5d9c38-537d-4d89-ba94-b98b6d72163b~p=9~adgrpid=0f5d9c38-537d-4d89-ba94-b98b6d72163b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1076476~plpr=COLLECTION~eid=135677ca-6f60-4eef-8b46-71dbe0de0e00~srvts=1758652834270~collid=80441",
sla: {
deliveryTime: 32,
lastMileTravel: 5.7,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "5.7 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-24 03:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textExtendedBadges: { },
textBased: { }
}
},
aggregatedDiscountInfoV3: {
header: "20% OFF",
subHeader: "UPTO ₹50",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
isNewlyOnboarded: true,
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.8",
ratingCount: "1.0K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "0f5d9c38-537d-4d89-ba94-b98b6d72163b"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=1076476&source=collection&query=Idli",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "499310",
name: "Sri Laxmi Tulasi Tiffin Center",
cloudinaryImageId: "jdmq3yesy371j73hleo4",
locality: "Ayyapa Society Road",
areaName: "Madhapur",
costForTwo: "₹200 for two",
cuisines: [
"South Indian"
],
avgRating: 4.1,
parentId: "256068",
avgRatingString: "4.1",
totalRatingsString: "784",
promoted: true,
adTrackingId: "cid=64d6e058-a185-45b1-9b19-19bd4005b6c4~p=10~adgrpid=64d6e058-a185-45b1-9b19-19bd4005b6c4#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=499310~plpr=COLLECTION~eid=4ddfa304-db0f-4a71-8a0f-a2a88bbdda3d~srvts=1758652834270~collid=80441",
sla: {
deliveryTime: 17,
lastMileTravel: 2.1,
serviceability: "SERVICEABLE",
slaString: "15-20 mins",
lastMileTravelString: "2.1 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-09-24 00:45:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textExtendedBadges: { },
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
}
]
}
}
},
aggregatedDiscountInfoV3: {
header: "30% OFF",
subHeader: "UPTO ₹75",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "64d6e058-a185-45b1-9b19-19bd4005b6c4"
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=499310&source=collection&query=Idli",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
}
]
const Body = () =>{
   return (
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
            {/* resturant list */}
            {/* <ResturantCardList resData ={resList[0]}/>
            <ResturantCardList resData ={resList[1]}/>
            <ResturantCardList resData ={resList[2]}/>
            <ResturantCardList resData ={resList[3]}/> */} {/*//Dynamic way to do it */}

            {/* {Using to map for resturant list} */}
            {resList.map((resturant) =>{
               return <ResturantCardList key= {resturant.card.card.info.id} resData = {resturant} />
            })}
            
         </div>

      </div>
   )
}

const AppLayOut = () =>{
  return (
   <div className="swiggy-app">
      <Header />
      <Body />

   </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);