/**
 * Renders the Home component which displays a list of courses and allows for filtering and searching.
 *
 * @return {JSX.Element} The rendered Home component.
 */
"use client";
import { useEffect, useState } from "react";
import CoursesTable from "./components/dataTable";
import Filters from "./components/filter";
import SearchFilters from "./components/search";
import { Breadcrumb, Layout } from "antd";
import { Course } from "./models/cource";
import { data } from "./data/mockData";

const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [filters, setFilters] = useState<Record<string, any[]>>({});
  const [filterCounts, setFilterCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    setCourses(data);
    setFilteredCourses(data);
  }, []);

  useEffect(() => {
    // Compute counts for tags based on currently filtered courses
    const counts: Record<string, number> = {};
    filteredCourses.forEach((course) => {
      course.tags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    setFilterCounts(counts);
  }, [filteredCourses]); // Recompute counts whenever filteredCourses changes

  const handleFilterChange = (
    field: string,
    optionValue: any,
    checked: boolean
  ) => {
    setFilters((prev) => ({
      ...prev,
      [field]: checked
        ? [...(prev[field] || []), optionValue]
        : (prev[field] || []).filter((value) => value !== optionValue),
    }));
  };

  useEffect(() => {
    const applyFilters = () => {
      let result = courses;
    
      Object.keys(filters).forEach((key) => {
        if (filters[key].length > 0) {
          if (key === "regions" || key === "tags") {
            result = result.filter((course) =>
              course[key].some((item) => filters[key].includes(item))
            );
          } else {
            result = result.filter((course: any) =>
              filters[key].includes(course[key])
            );
          }
        }
      });

      setFilteredCourses(result);
    };

    applyFilters();
  }, [filters, courses]);

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "#fff" }}>Logo</div>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <Sider
            style={{
              background: "#fff",
              marginLeft: "10px",
            }}
            width={400}
          >
            <Filters
              filters={filters}
              onFilterChange={handleFilterChange}
              counts={filterCounts}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: "74vh" }}>
            <div style={{ marginBottom: "20px" }}>
              <SearchFilters filters={filters} onChange={setFilters} />
            </div>
            <CoursesTable courses={filteredCourses} />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
}
