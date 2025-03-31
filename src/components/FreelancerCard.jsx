function FreelancerCard({ name, skill, rate, onRemove }) {
  return (
    <li
      key={name}
      className="bg-white shadow-md p-4 mb-3 rounded flex justify-between items-center hover:shadow-lg transition-shadow duration-200"
    >
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">
          {skill} – ${rate}/hr
        </p>
      </div>
      <button
        onClick={onRemove}
        className="text-red-500 hover: text-sm cursor-pointer"
      >
        ❌
      </button>
    </li>
  );
}

export default FreelancerCard;