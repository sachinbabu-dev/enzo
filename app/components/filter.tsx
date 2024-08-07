/**
 * A functional component that renders a filter panel with collapsible sections.
 * Each section contains a list of filter options with checkboxes and optional badges.
 *
 * @param {Record<string, any[]>} filters - An object containing the current filter values.
 * @param {Record<string, number>} counts - An object containing the count of items for each filter option.
 * @param {(field: string, optionValue: any, checked: boolean) => void} onFilterChange - A callback function to handle filter changes.
 * @return {JSX.Element} A JSX element representing the filter panel.
 */

import React from "react";
import { Checkbox, Collapse, Badge } from "antd";
import { filterFields, tagsColor } from "../data/mockData";

interface FiltersProps {
  filters: Record<string, any[]>;
  counts: Record<string, number>;  // This holds the count of items for each filter option
  onFilterChange: (field: string, optionValue: any, checked: boolean) => void;
}

const { Panel } = Collapse;

const Filters: React.FC<FiltersProps> = ({ filters, counts, onFilterChange }) => {
  return (
    <div>
      <Collapse defaultActiveKey={filterFields.map((_, index) => `${index + 1}`)}>
        {filterFields.map((filter: any, index) => (
          <Panel header={filter.label} key={`${index + 1}`}>
            {filter.options.map((option: any) => (
              <div key={option.value} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Checkbox
                  onChange={(e) => onFilterChange(filter.value, option.value, e.target.checked)}
                  checked={filters[filter.value]?.includes(option.value)}
                >
                  {option.label}
                </Checkbox>
                {filter.value === 'tags' && (
                  <Badge
                    count={counts[option.value] || 0}
                    style={{ backgroundColor: tagsColor[option.value], marginLeft: '8px' }}
                  />
                )}
              </div>
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Filters;
