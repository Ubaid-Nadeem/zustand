import { useConterStore } from "@/store/counter.store";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

export default function Cart() {

  const cart = useConterStore((store: any) => store.cart);

  interface DataType {
    name: string;
    price: number;
    qty : number
  }

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
      title: "Quantity",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              console.log(cart);
            }}
          >
           Delete
          </a>
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = cart;


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
        Cart
      </h1>
      <Table<DataType> columns={columns} dataSource={data} />
    </div>
  );
}
