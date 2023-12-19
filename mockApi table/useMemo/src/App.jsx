import React from "react";
import { Table } from "antd";
import { useState, useEffect } from "react";
import { Button, Flex } from "antd";
import Add from "./add";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    suppliersData();
  }, []);

  <Add />;
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,

      // onFilter: (value, record) => record.name.indexOf(value) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ["descend"],
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.contactTitle - b.contactTitle,
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.contactTitle - b.contactTitle,
    },
    {
      title: "City",
      dataIndex: ["address", "city"],

      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },

    {
      title: "Delete",
      render: (text, record) => (
        <Button
          type="primary"
          danger
          onClick={() => {
            fetch(`https://northwind.vercel.app/api/suppliers${record.id}`, {
              method: "DELETE",
            });
            setDatas((datas) => datas.filter((x) => x.id !== record.id));
          }}
        >
          {"Delete"}
        </Button>
      ),
    },
    {
      title: "Edit",
      render: (text, record) => <Button type="primary">Edit</Button>,
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];
  const [filterInfo, setFilterInfo] = useState({});
  const [sortInfo, serSortInfo] = useState({});
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  let url = "https://northwind.vercel.app/api/suppliers";

  let suppliersData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((suppliers) => {
        setDatas(suppliers);
        console.log(suppliers);
      });
  };

  return (
    <>
      <Table columns={columns} dataSource={datas} onChange={onChange} />
    </>
  );
}

export default App;
