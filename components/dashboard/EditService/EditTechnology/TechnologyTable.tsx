import { FC } from "react";

import { motion } from "framer-motion";
import { MoreHorizontal, Edit, Eye } from "lucide-react";
import { Technology } from "@/components/types/TechnologyDashboard";

interface TechnologyTableProps {
  technologies: Technology[];
  onEdit: (technology: Technology) => void;
  onViewDetails: (technology: Technology) => void;
  onStatusChange: (id: string, status: "active" | "inactive") => void;
}

export const TechnologyTable: FC<TechnologyTableProps> = ({
  technologies,
  onEdit,
  onViewDetails,
  onStatusChange,
}) => {
  return (
    <div className="w-full overflow-x-auto bg-gray-900/50 rounded-lg shadow-xl text-sm ring-1 ring-blue-500/20">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-blue-400/20">
            <th className="p-4 text-left text-blue-400">Technology</th>
            <th className="p-4 text-left text-blue-400">Stack</th>
            <th className="p-4 text-left text-blue-400">Status</th>
            <th className="p-4 text-left text-blue-400">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-400/10">
          {technologies.map((technology) => (
            <motion.tr
              key={technology.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className=" hover:bg-blue-400/5 transition-colors duration-150"
            >
              <td className="p-4 text-white">
                <div className="flex items-center gap-2 truncate">
                  {technology.name}
                </div>
              </td>
              <td className="p-4 truncate">
                <div className="flex gap-2 truncate">
                  {technology.tech.map((item: any, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-4">
                <select
                  className="bg-gray-900 cursor-pointer text-white border border-blue-400/40 rounded px-2 py-1"
                  onChange={(e) =>
                    onStatusChange(
                      technology.id,
                      e.target.value as "active" | "inactive"
                    )
                  }
                  value={technology.status}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  {/* <motion.button
                    disabled={true}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onViewDetails(technology)}
                    className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-full"
                  >
                     <Eye className="w-4 h-4" />
                  </motion.button> */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onEdit(technology)}
                    className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-full"
                  >
                    <Edit className="w-4 h-4" />
                  </motion.button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
