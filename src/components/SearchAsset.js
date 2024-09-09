import { useState } from 'react';
import axios from 'axios';

function SearchAsset() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://backend-asserts-6.onrender.com/api/assets/search?query=${query}`);
      setResults(response.data);
    } catch (err) {
      alert('Error fetching assets');
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <form onSubmit={handleSearch}>
        <div className="mb-4">
          <label className="block text-gray-700">Search</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Search</button>
      </form>

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}

      <ul className="mt-4">
        {results.map((asset) => (
          <li key={asset._id} className="border-b py-2">
            <h3 className="text-lg font-semibold">{asset.title}</h3>
            <p>{asset.content}</p>
          </li>
        ))}
      </ul>

      {!loading && results.length === 0 && (
        <p className="mt-4 text-gray-500">No assets found.</p>
      )}
    </div>
  );
}

export default SearchAsset;
