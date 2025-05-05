// components/RoadmapItem.js
export default function RoadmapItem({ title, problems }) {
    return (
      <div className="flex flex-col items-center">
        <div className="w-1 h-12 bg-white" />
        <div className="w-6 h-6 border-2 border-white rounded-full bg-black" />
        <div className="text-center mt-2 mb-6">
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-gray-400">{problems} problems</p>
        </div>
      </div>
    );
  }