// components/ui/CustomSelect.tsx
import * as React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceSelectProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
}

export function ServiceSelect({ value, onChange, name = "service" }: ServiceSelectProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2 text-white">
        
      </label>
      {/* Hidden input to submit value to Formspree */}
      <input type="hidden" name={name} value={value} />
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
        >
          <Select.Value placeholder="" />
          <Select.Icon>
            <ChevronDown className="h-4 w-4" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content
          className="z-50 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg text-white"
          position="popper"
        >
          <Select.Viewport className="p-1">
            {[
              { label: "Mini Valet", value: "Mini Valet" },
              { label: "Full Valet Detailing", value: "Full Valet detailing" },
              { label: "Deep Clean Valet", value: "Deep Clean Valet" },
              { label: "Engine Bay Detail", value: "Engine Bay Detail" },
              { label: "Seats & Dashboard Polish", value: "Seats & Dashboard Polish" },
              { label: "Mobile Service", value: "mobile-service" },
            ].map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="cursor-pointer select-none px-4 py-2 hover:bg-gray-700 rounded flex items-center justify-between"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check className="h-4 w-4 text-green-400" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
