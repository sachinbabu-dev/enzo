// components/Filters.tsx
import React from "react";
import { Checkbox, Collapse } from "antd";
import { filterFields } from "../data/mockData"; // adjust the path as necessary

const { Panel } = Collapse;

interface FiltersProps {
  filters: Record<string, any[]>;
  onFilterChange: (field: string, optionValue: any, checked: boolean) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <div>
      <Collapse
        defaultActiveKey={filterFields.map((_, index) => `${index + 1}`)}
      >
        {filterFields.map((filter: any, index) => (
          <Panel header={filter.label} key={`${index + 1}`}>
            {filter.options.map((option: any) => (
              <Checkbox
                key={option.value}
                onChange={(e) =>
                  onFilterChange(filter.value, option.value, e.target.checked)
                }
                checked={filters[filter.value]?.includes(option.value)}
              >
                {option.label}
              </Checkbox>
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Filters;
