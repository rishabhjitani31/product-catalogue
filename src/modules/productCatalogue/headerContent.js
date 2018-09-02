import React from "react";
import { Button } from "antd";
import CreateProduct from "./createProduct";
import store from "./Store";

const Header = props => {
  return (
    <div>
      <Button
        type="primary"
        onClick={() => (store.isCreateModalOpen = true)}
        icon="plus-circle-o"
        size="large"
      >
        Create Products
      </Button>
      <CreateProduct />
    </div>
  );
};
export default Header;
