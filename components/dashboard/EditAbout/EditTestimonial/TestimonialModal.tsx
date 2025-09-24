"use client";

import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Testimonial } from "@/components/types/Testimonial";
import { X } from "lucide-react";

interface TestimonialModalProps {
  testimonial: Testimonial | null;
  onClose: () => void;
  onStatusChange: (
    testimonial: Testimonial,
    status: "active" | "inactive"
  ) => void;
}

export function TestimonialModal({
  testimonial,
  onClose,
  onStatusChange,
}: TestimonialModalProps) {
  if (!testimonial) return null;

  const isActive = testimonial.status === "active";

  return (
    <Dialog open={!!testimonial} onOpenChange={() => onClose()}>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-lg max-w-2xl w-full p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className={`w-16 h-16 rounded-full object-cover ring-2 ${
                  isActive ? "ring-blue-400" : "ring-red-400"
                }`}
              />
              <div>
                <h3
                  className={`text-xl font-semibold ${
                    isActive ? "text-white" : "text-red-400"
                  }`}
                >
                  {testimonial.author}
                </h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <Badge
              variant="outline"
              className={
                isActive
                  ? "border-blue-400 text-blue-400"
                  : "border-red-400 text-red-400"
              }
            >
              {isActive ? "Active" : "Inactive"}
            </Badge>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4">
            <p
              className={`leading-relaxed ${
                isActive ? "text-gray-300" : "text-red-300"
              }`}
            >
              {testimonial.content}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                onStatusChange(testimonial, isActive ? "inactive" : "active");
                onClose();
              }}

              className={
                isActive
                  ? "primaryButton"
                  : "secondaryButton"
              }
            >
              {isActive ? "Deactivate Testimonial" : "Activate Testimonial"}
            </button>
            <button onClick={onClose} className="border-blue-400/20 text-blue-400  hover:bg-blue-400/20 transition-colors rounded-full p-2">
              <X className="h-5 w-5"/>
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
