"use client";
import styles from "./page.module.css";
import { Breadcrumb, Layout } from "antd";

const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
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
              border: "1px solid #f0f0f0",
              marginLeft: "10px",
            }}
            width={400}
          ></Sider>
          <Content style={{ padding: "0 24px", minHeight: "74vh" }}>
            Content
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
}
