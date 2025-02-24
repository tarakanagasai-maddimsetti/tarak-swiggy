import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-continer">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/021/953/308/non_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "589937",
      name: "Supreeth Grand",
      cloudinaryImageId: "iphz0adnt4zvdak3nj8o",
      locality: "Financial District",
      areaName: "Nanakramguda",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Chinese", "Biryani"],
      avgRating: 4.1,
      parentId: "352882",
      avgRatingString: "4.1",
      totalRatingsString: "2.1K+",
      promoted: true,
      adTrackingId:
        "cid=25590973~p=0~adgrpid=25590973#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=589937~eid=29e3a255-38c9-4e01-8f44-a4aea3dded81~srvts=1740414205336~collid=115117",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-02-25 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-255a25bb-dcb4-43b6-bb46-0cb725a0d6f2",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/supreeth-grand-financial-district-nanakramguda-rest589937",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "252730",
      name: "The Gravity Lounge",
      cloudinaryImageId: "0448532dd405fea5c4eaca0ea17ee78d",
      locality: "Q City Road",
      areaName: "Gowlidoddy",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "Italian",
        "Kebabs",
        "Tandoor",
        "North Indian",
        "Burgers",
        "American",
        "Chinese",
      ],
      avgRating: 3.9,
      parentId: "314522",
      avgRatingString: "3.9",
      totalRatingsString: "6.6K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-02-24 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-255a25bb-dcb4-43b6-bb46-0cb725a0d6f2",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/the-gravity-lounge-q-city-road-gowlidoddy-rest252730",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "699731",
      name: "Cafe Chaiminar",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1598c8c1-c649-4bdf-9271-4ac5ffe98e85_699731.jpg",
      locality: "Sri Laxmi Nagar Colony",
      areaName: "Manikonda",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Mughlai", "Chinese", "Beverages"],
      avgRating: 4.3,
      parentId: "418179",
      avgRatingString: "4.3",
      totalRatingsString: "1.9K+",
      promoted: true,
      adTrackingId:
        "cid=24988375~p=1~adgrpid=24988375#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=699731~eid=367ae0b0-e9e1-4024-b6b7-4ee0d4dc3736~srvts=1740414205336~collid=115117",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.6 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-02-25 11:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹40 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-255a25bb-dcb4-43b6-bb46-0cb725a0d6f2",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/cafe-chaiminar-sri-laxmi-nagar-colony-manikonda-rest699731",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "816289",
      name: "Rayalaseema Crunch",
      cloudinaryImageId: "83cb4138f228d5632c0b142a662ec9ac",
      locality: "Nanakramguda",
      areaName: "Nanakramguda",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Snacks"],
      avgRating: 4.1,
      parentId: "420098",
      avgRatingString: "4.1",
      totalRatingsString: "172",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-02-24 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹599",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-255a25bb-dcb4-43b6-bb46-0cb725a0d6f2",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/rayalaseema-crunch-nanakramguda-rest816289",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "218068",
      name: "Mehfil",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/24/a9008faa-2e5a-430a-a9dc-74192e8870e6_218068.jpg",
      locality: "Vinayak Nagar",
      areaName: "Gachibowli",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Chinese", "Kebabs", "Tandoor"],
      avgRating: 4.3,
      parentId: "637",
      avgRatingString: "4.3",
      totalRatingsString: "115K+",
      promoted: true,
      adTrackingId:
        "cid=25051760~p=2~adgrpid=25051760#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=218068~eid=a06d34a5-132a-4657-ab10-87c64826167f~srvts=1740414205336~collid=115117",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "4.2 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-02-25 02:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-255a25bb-dcb4-43b6-bb46-0cb725a0d6f2",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/mehfil-vinayak-nagar-gachibowli-rest218068",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "1866",
      name: "Being Hungry",
      cloudinaryImageId: "tvcngaaagxlkg97le9tu",
      locality: "Gachibowli",
      areaName: "Gachibowli",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 4.3,
      parentId: "105",
      avgRatingString: "4.3",
      totalRatingsString: "33K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.7 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-02-25 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹127",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.7",
          ratingCount: "1.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-255a25bb-dcb4-43b6-bb46-0cb725a0d6f2",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/being-hungry-gachibowli-rest1866",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "801529",
      name: "Chennapatnam",
      cloudinaryImageId: "8d3ac40ad5f53a17499f9042cbd6169e",
      locality: "Chennapatnam",
      areaName: "Gachibowli",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Indian", "South Indian"],
      avgRating: 4,
      parentId: "283052",
      avgRatingString: "4.0",
      totalRatingsString: "360",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "4.7 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-02-24 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹127",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-255a25bb-dcb4-43b6-bb46-0cb725a0d6f2",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/chennapatnam-chennapatnam-gachibowli-rest801529",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "293166",
      name: "Hotel CVR",
      cloudinaryImageId: "ssfhqaeor8lxptbyec6n",
      locality: "Manikonda",
      areaName: "Narsingi",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 4.1,
      parentId: "98660",
      avgRatingString: "4.1",
      totalRatingsString: "563",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "5.0 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-02-24 23:25:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-255a25bb-dcb4-43b6-bb46-0cb725a0d6f2",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/hotel-cvr-manikonda-narsingi-rest293166",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
