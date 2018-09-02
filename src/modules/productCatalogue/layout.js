import React from "react";
import { Layout } from "antd";
import HeaderContent from "./headerContent";
import ProductList from "./productList";
import "./layout.css"

const { Header, Content } = Layout;

const AppLayout = props => {
  return (
    <React.Fragment>
      <Header>
        <HeaderContent />
      </Header>
      <Content>
        <ProductList />
      </Content>
    </React.Fragment>
  );
};
export default AppLayout;
