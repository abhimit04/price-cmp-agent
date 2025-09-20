import { useState } from 'react';

export default function Home() {
  const [item, setItem] = useState('');
  const [data, setData] = useState(null);

  const searchItem = async () => {
    const res = await fetch(`/api/compare?item=${encodeURIComponent(item)}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Price Comparison AI</h1>
      <input
        value={item}
        onChange={e => setItem(e.target.value)}
        placeholder="Search for an item"
        className="border p-2 mr-2"
      />
      <button onClick={searchItem} className="bg-blue-500 text-white p-2 rounded">Search</button>

      {data && (
        <div className="mt-4">
          <h2 className="text-xl">Best Deal: {data.bestDeal.platform} - ₹{data.bestDeal.price}</h2>
          <ul>
            {data.prices.map(p => (
              <li key={p.platform}>{p.platform}: ₹{p.price}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
