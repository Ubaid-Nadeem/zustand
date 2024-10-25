import React from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { useConterStore } from "@/store/counter.store";
import { match } from "assert";

interface DataType {
  name: string;
  price: number;
}

const Products = () => {
  const { products, cart, updateCart } = useConterStore((store: any) => store);
  let cartClone: any = [...cart];

  const data: DataType[] = products;

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              let isAdd = false;
              if (cartClone.length > 0) {
                cartClone.forEach((item: any, index: number) => {
                  if (record.name == item.name) {
                    isAdd = true;
                    item.qty = ++item.qty;
                  }
                });
              }

              if (!isAdd) {
                {
                  cartClone.push({
                    ...record,
                    qty: 1,
                  });
                }
              }

            
              updateCart(cartClone);
            }}
          >
            Add to cart
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div
      style={{
        padding: "15px",
      }}
    >
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        Products
      </h1>
      <Table<DataType> columns={columns} dataSource={data} />
    </div>
  );
};

export default Products;
