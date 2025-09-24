"use client";

import { FC } from "react";
import { TeamMember } from "@/components/types/TeamMember";
import { Modal } from "@/components/Shared/Modal";

interface TeamMemberFormProps {
  member?: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<TeamMember>) => void;
}

export const TeamMemberForm: FC<TeamMemberFormProps> = ({
  member,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: Partial<TeamMember> = {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      team: [formData.get("team") as string],
      image: formData.get("image") as string,
      bio: formData.get("bio") as string,
      skills: (formData.get("skills") as string)
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      status: formData.get("status") as "active" | "inactive",
      social: {
        linkedin: formData.get("linkedin") as string,
        twitter: formData.get("twitter") as string,
        facebook: formData.get("facebook") as string,
        github: formData.get("github") as string,
      },
    };
    onSubmit(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={member ? "Edit Member" : "Add New Member"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-400 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={member?.name}
              className="customInput"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-400 mb-1">
              Role
            </label>
            <input
              type="text"
              name="role"
              defaultValue={member?.role}
              className="customInput"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-400 mb-1">
              Team
            </label>
            <select
              name="team"
              defaultValue={member?.team[0] || ""}
              className="customInput hover:cursor-pointer"
              required
            >
              <option value="" disabled>
                Select a team
              </option>
              <option value="Web Team">Web Team</option>
              <option value="SEO Team">SEO Team</option>
              <option value="Graphics Team">Graphics Team</option>
              <option value="Networking">Networking</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-400 mb-1">
              Status
            </label>
            <select
              name="status"
              defaultValue={member?.status || "active"}
              className="customInput"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-400 mb-1">
            Image URL
          </label>
          <input
            type="file"
            name="image"
            className="hover:cursor-pointer customInput"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-400 mb-1">
            Bio
          </label>
          <textarea
            name="bio"
            defaultValue={member?.bio}
            className="customInput"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-400 mb-1">
            Skills (one per line)
          </label>
          <textarea
            name="skills"
            defaultValue={member?.skills.join("\n")}
            className="customInput"
            rows={4}
            required

          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-blue-400">
            Social Links
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn URL"
              defaultValue={member?.social.linkedin}
              className="customInput"
            />
            <input
              type="url"
              name="twitter"
              placeholder="Twitter URL"
              defaultValue={member?.social.twitter}
              className="customInput"
            />
            <input
              type="url"
              name="facebook"
              placeholder="Facebook URL"
              defaultValue={member?.social.facebook}
              className="customInput"
            />
            <input
              type="url"
              name="github"
              placeholder="GitHub URL"
              defaultValue={member?.social.github}
              className="customInput"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-blue-400/30 text-blue-400 rounded-md hover:bg-blue-400/10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-400/10 text-blue-400 rounded-md hover:bg-blue-400/20"
          >
            {member ? "Update Member" : "Add Member"}
          </button>
        </div>
      </form>
    </Modal>
  );
};
