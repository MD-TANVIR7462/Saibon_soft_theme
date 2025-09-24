"use client";

import { useState, useRef, useEffect } from "react";
import { Filter, ChevronDown } from "lucide-react";

interface DropdownOption {
  value: "all" | "active" | "inactive";
  label: string;
}

interface CustomDropdownProps {
  currentFilter: "all" | "active" | "inactive";
  onFilterChange: (status: "all" | "active" | "inactive") => void;
}

const options: DropdownOption[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

export function CustomDropdown({
  currentFilter,
  onFilterChange,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getCurrentLabel = () => {
    return (
      options.find((option) => option.value === currentFilter)?.label ||
      "All Projects"
    );
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-2  md:gap-2 md:px-4 md:py-2 border border-blue-400/30 rounded-md text-blue-400 hover:bg-blue-400/10 transition-colors"
      >
        <Filter className="w-4 h-4" />
        <span>{getCurrentLabel()}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-gray-900 border border-blue-400/20 rounded-md shadow-lg overflow-hidden">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onFilterChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-2 md:px-4 py-1 md:py-2 text-left text-white hover:bg-blue-400/10 transition-colors text-sm md:text-base ${
                currentFilter === option.value ? "bg-blue-400/20" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
