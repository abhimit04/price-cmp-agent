const headers = {
  "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
  "X-RapidAPI-Host": "",
};

export async function getAmazonPrice(item) {
  headers["X-RapidAPI-Host"] = "amazon-price1.p.rapidapi.com";
  const res = await fetch(
    `https://amazon-price1.p.rapidapi.com/search?query=${encodeURIComponent(item)}`,
    { headers }
  );
  const data = await res.json();
  return data?.results?.[0]?.price || null;
}

export async function getFlipkartPrice(item) {
  headers["X-RapidAPI-Host"] = "flipkart-price1.p.rapidapi.com";
  const res = await fetch(
    `https://flipkart-price1.p.rapidapi.com/search?query=${encodeURIComponent(item)}`,
    { headers }
  );
  const data = await res.json();
  return data?.results?.[0]?.price || null;
}

export async function getBigBasketPrice(item) {
  headers["X-RapidAPI-Host"] = "bigbasket-grocery-data.p.rapidapi.com";
  const res = await fetch(
    `https://bigbasket-grocery-data.p.rapidapi.com/search?query=${encodeURIComponent(item)}`,
    { headers }
  );
  const data = await res.json();
  return data?.results?.[0]?.price || null;
}

export async function getZeptoPrice(item) {
  headers["X-RapidAPI-Host"] = "zepto-grocery.p.rapidapi.com";
  const res = await fetch(
    `https://zepto-grocery.p.rapidapi.com/search?query=${encodeURIComponent(item)}`,
    { headers }
  );
  const data = await res.json();
  return data?.results?.[0]?.price || null;
}
