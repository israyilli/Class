import React from "react";
import { Table } from "antd";
import { useState, useEffect } from "react";
import { Button, Flex } from "antd";
import { Link } from "";
function Categories() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    categoriesData();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.contactTitle - b.contactTitle,
    },
    {
      title: "Description",
      dataIndex: "description",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.contactTitle - b.contactTitle,
    },

    // {
    //   title: "Delete",
    //   render: (text, record) => (
    //     <Button
    //       type="primary"
    //       danger
    //       onClick={() => {
    //         fetch(
    //           `https://6554d83163cafc694fe7163f.mockapi.io/category${record.id}`,
    //           {
    //             method: "DELETE",
    //           }
    //         );
    //         setDatas((datas) => datas.filter((x) => x.id !== record.id));
    //       }}
    //     >
    //       {"Delete"}
    //     </Button>
    //   ),
    // },
    {
      title: "Detail",
      render: (text, record) => <Button>Detail</Button>,
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
  let url = "https://6554d83163cafc694fe7163f.mockapi.io/category";

  let categoriesData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((suppliers) => {
        setDatas(suppliers);
        console.log(suppliers);
      });
  };

  return (
    <>
      <button>
        <Link to="add">Add</Link>
      </button>
      <Table columns={columns} dataSource={datas} onChange={onChange} />
    </>
  );
}

export default Categories;
