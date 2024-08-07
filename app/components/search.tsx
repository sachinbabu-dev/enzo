import { Input } from "antd";
import React from "react";
import type { GetProps } from "antd";

const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

const SearchFilter = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchFilter;
