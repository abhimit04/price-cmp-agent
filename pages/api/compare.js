import { getAmazonPrice, getFlipkartPrice, getBigBasketPrice, getZeptoPrice } from '../../lib/platforms';

export default async function handler(req, res) {
  const { item } = req.query;
  if (!item) return res.status(400).json({ error: "Item required" });

  const [amazon, flipkart, bigbasket, zepto] = await Promise.all([
    getAmazonPrice(item),
    getFlipkartPrice(item),
    getBigBasketPrice(item),
    getZeptoPrice(item),
  ]);

  const prices = [
    { platform: 'Amazon', price: amazon },
    { platform: 'Flipkart', price: flipkart },
    { platform: 'BigBasket', price: bigbasket },
    { platform: 'Zepto', price: zepto },
  ].filter(p => p.price !== null);

  const bestDeal = prices.reduce((a, b) => (a.price < b.price ? a : b), prices[0] || {});

  res.status(200).json({ prices, bestDeal });
}
