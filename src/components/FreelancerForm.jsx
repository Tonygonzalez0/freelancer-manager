function FreelancerForm({
  name,
  setName,
  skill,
  setSkill,
  rate,
  setRate,
  handleAdd,
}) {
  return (
    <div className="space-y-2 mb-6">
      <h2 className="text-xl font-semibold mb-2">Add a New Freelancer</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-2 w-full"
      />
      <input
        type="number"
        placeholder="Rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-2 w-full"
      />
      <button
        disabled={
          !name.trim() ||
          !skill.trim() ||
          !Number.isInteger(Number(rate)) ||
          Number(rate) <= 0
        }
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        Add Freelancer
      </button>
    </div>
  );
}

export default FreelancerForm;