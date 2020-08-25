let shopId = "QualityRugStore"; // doyennediscordia
let etsyShopURL =
  "https://openapi.etsy.com/v2/shops/" +
  shopId +
  "?includes=Sections,Listings&api_key=8olibkhxto6dfdptypg40bni";
let etsyShopListingsURL =
  "https://openapi.etsy.com/v2/shops/" +
  shopId +
  "/listings/active?fields=title,price,listing_id,shop_section_id&includes=Images&api_key=8olibkhxto6dfdptypg40bni";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const E_SHOP_DATA = [];

const getSection = ({ shop_section_id, title }) => {
  return {
    id: shop_section_id,
    title: title,
    routeName: title.replace(/\s/g, "").toLowerCase(),
    items: [],
    imageUrl: "",
  };
};

const getListing = ({ listing_id, title, price, shop_section_id, Images }) => {
  return {
    id: listing_id,
    name: title.slice(0, title.indexOf("-") - 1),
    price: price,
    imageUrl: Images[0].url_570xN,
    section: shop_section_id,
  };
};

const normalizeArrayData = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

const etsyQuery = async (callback) => {
  //GET ETSY SHOP, with Sections and Listings
  const getShop = await fetch(proxyurl + etsyShopURL, { mode: "cors" });
  const shop = await getShop.json();
  const sections = shop.results[0].Sections.map((section) =>
    getSection(section)
  );
  //console.log(shop);

  // GET SHOP LISTINGS with Images
  const getShopListings = await fetch(proxyurl + etsyShopListingsURL, {
    mode: "cors",
  });
  const shopListings = await getShopListings.json();
  const listings = shopListings.results.map((listing) => getListing(listing));
  //console.log(listings);

  // ADD ITEMS TO SECTIONS
  for (let i = 0; i < listings.length; i++) {
    for (let j = 0; j < sections.length; j++) {
      if (listings[i].section === sections[j].id) {
        if (sections[j].imageUrl === "") {
          sections[j].imageUrl = listings[i].imageUrl;
        }
        sections[j].items.push(listings[i]);
      }
    }
  }
  E_SHOP_DATA.push(...sections.filter((section) => section.items.length)); // Only add non-empty sections
  const normalizedData = normalizeArrayData(E_SHOP_DATA, "title");
  //console.log(normalizedData);
  return normalizedData;
};


const ETSY_SHOP_DATA = etsyQuery(function(data) {
  return data;
});

export default ETSY_SHOP_DATA;


