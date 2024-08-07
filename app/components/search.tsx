import React, { useState, useEffect } from "react";
import { Input } from "antd";

interface SearchFiltersProps {
  filters: Record<string, any[]>;
  onChange: (newFilters: Record<string, any[]>) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, onChange }) => {
  const [filterString, setFilterString] = useState<string>("");

  // Serialize filters to string whenever filters change
  useEffect(() => {
    const filterParts: any = [];
    for (const key in filters) {
      filters[key].forEach((value) => {
        filterParts.push(`${key}:${value}`);
      });
    }
    setFilterString(filterParts.join("; "));
  }, [filters]);

  // Parse the filter string back into filter object
  const handleFilterStringChange = (value: string) => {
    const newFilters: Record<string, any[]> = {};
    const parts = value
      .split(";")
      .map((part) => part.trim())
      .filter((part) => part);

    parts.forEach((part) => {
      const [key, value] = part.split(":").map((subPart) => subPart.trim());
      if (key && value !== undefined) {
        if (!newFilters[key]) {
          newFilters[key] = [];
        }
        newFilters[key].push(
          value === "true" ? true : value === "false" ? false : value
        );
      }
    });

    onChange(newFilters);
  };

  return (
    <Input
      value={filterString}
      onChange={(e) => handleFilterStringChange(e.target.value)}
      placeholder="Enter filter criteria like public:true; active:false"
      style={{ width: "100%" }}
    />
  );
};

export default SearchFilters;
