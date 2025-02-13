// Boxes.jsx
const Boxes = ({ image, title }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-2 shadow-lg w-48 text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
    </div>
  );
};

export default Boxes;
