function RateFilter({
  setMaxRate,
  maxRate,
  isFilterActive,
  handleMaxRateFilter,
  clearFilterList,
}) {
  return (
    <div className="space-y-2 mb-6">
      <h2 className="text-xl font-semibold mb-2">Max Rate</h2>
      <input
        type="number"
        min="1"
        step="1"
        placeholder="Max Rate"
        value={maxRate}
        onChange={(e) => setMaxRate(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-2 w-full"
      />
      <button
        disabled={!Number.isInteger(Number(maxRate)) || Number(maxRate) <= 0}
        onClick={() => handleMaxRateFilter(maxRate)}
        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 cursor-pointer mr-3 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Max Rate Filter
      </button>
      <button
        disabled={isFilterActive === false}
        onClick={clearFilterList}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer disabled:bg-red-300 disabled:cursor-not-allowed"
      >
        Clear Filter
      </button>
    </div>
  );
}

export default RateFilter;
