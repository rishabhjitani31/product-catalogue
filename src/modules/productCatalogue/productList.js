import React from "react";
import { Card, Table } from "antd";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import columns from "./columns";
import store from "./Store";

const { Meta } = Card;

const ProductList = props => {
  return (
    <div>
      <div className="flex">
        {toJS(store.sortedProductList).map((product, i) => {
          return (
            product.image && (
              <Card
                className={
                  store.selectedProductsList.findIndex(
                    p => p.id === product.id
                  ) > -1
                    ? "highlight"
                    : ""
                }
                onClick={() => store.onProductSelect(product)}
                key={i}
                hoverable
                style={{ width: 240, margin: "1%" }}
                cover={<img alt="example" src={product.image[0].thumbUrl} />}
              >
                <Meta
                  title={
                    <div>
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 0.8 }}> {product.name}</div>
                        <div style={{ flex: 0.2, color: "#19c6ae" }}>
                          ${product.price}
                        </div>
                      </div>
                      <div>{product.description}</div>
                    </div>
                  }
                />
              </Card>
            )
          );
        })}
      </div>
      <div>
        {store.selectedProductsList.slice().length > 0 && (
          <Table
            dataSource={store.selectedProductsList.slice()}
            columns={columns()}
          />
        )}
      </div>
    </div>
  );
};
export default observer(ProductList);
