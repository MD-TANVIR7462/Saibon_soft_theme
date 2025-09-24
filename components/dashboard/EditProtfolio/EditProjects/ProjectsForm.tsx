"use client";

import { Modal } from "@/components/Shared/Modal";
import { Project } from "@/components/types/Projects";

import { FC } from "react";

interface ProjectFormProps {
  project?: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Project>) => void;
}

export const ProjectForm: FC<ProjectFormProps> = ({
  project,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: Partial<Project> = {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      status: formData.get("status") as "active" | "inactive",
      image: formData.get("image") as string,
      link: formData.get("link") as string,
    };
    onSubmit(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project ? "Edit Project" : "Add New Project"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-400 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={project?.title}
              className="customInput"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-400 mb-1">
              Category
            </label>
            <select
              name="category"
              defaultValue={project?.category || ""}
              className="customInput hover:cursor-pointer"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Web Apps">Web Apps</option>
              <option value="Graphics">Graphics</option>
            </select>
          </div>
        </div>



        <div>
          <label className="block text-sm font-medium text-blue-400 mb-1">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            defaultValue={project?.image}
            className="customInput"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-400 mb-1">
            Project Link
          </label>
          <input
            type="url"
            name="link"
            defaultValue={project?.link}
            className="customInput"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-blue-400">Status</label>
          <select
          
            className="bg-gray-800 border border-gray-700 rounded-md text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button type="button" onClick={onClose} className="secondaryButton">
            Cancel
          </button>
          <button type="submit" className="primaryButton">
            {project ? "Update Project" : "Add Project"}
          </button>
        </div>
      </form>
    </Modal>
  );
};
