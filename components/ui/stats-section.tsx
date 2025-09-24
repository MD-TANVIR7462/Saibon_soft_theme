import { Users, Code, Globe2 } from "lucide-react";

const stats = [
  { icon: Users, value: "300+", label: "Clients" },
  { icon: Code, value: "500+", label: "Projects" },
  { icon: Globe2, value: "100+", label: "Cities" },
];

export const StatsSection = () => {
  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-lg bg-white/5 p-4 backdrop-blur-lg"
        >
          <stat.icon className="mb-2 h-6 w-6 text-blue-500" />
          <span className="text-2xl font-bold text-white">{stat.value}</span>
          <span className="text-sm text-gray-300">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};