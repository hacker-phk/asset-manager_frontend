import React from 'react';
import AddAsset from './components/AddAsset';
import SearchAsset from './components/SearchAsset';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl">Asset Manager</h1>
      </header>
      
      <main className="container mx-auto py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Asset</h2>
          <AddAsset />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Search Assets</h2>
          <SearchAsset />
        </div>
      </main>
    </div>
  );
}

export default App;
