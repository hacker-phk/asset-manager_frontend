import { useState } from 'react';
import axios from 'axios';

function AddAsset() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('paragraph');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAsset = { title, content, type };
    try {
      await axios.post('https://backend-asserts-6.onrender.com/api/assets/add', newAsset);
      alert('Asset added successfully');
      setTitle('');
      setContent('');
      setType('paragraph');
    } catch (err) {
      alert('Error adding asset');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 rounded">
          <option value="link">Link</option>
          <option value="paragraph">Paragraph</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Asset</button>
    </form>
  );
}

export default AddAsset;
