import React from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function Table() {
  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>StockCount</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((element) => {
              return (
                <Tr key={uuidv4()}>
                  <Td>{element.id}</Td>
                  <Td>{element.name}</Td>
                  <Td>{element.price}</Td>
                  <Td>{element.stockCount}</Td>
                  <Td>
                    <Button colorScheme="cyan">Edit</Button>
                  </Td>
                  <Td>
                    <Button
                      onClick={() => {
                        console.log(data);
                        let filteredProducts = data.filter(
                          (x) => x.id !== data.id
                        );
                        axios.delete(
                          `https://6556153184b36e3a431efb17.mockapi.io/products/${data.id}`
                        );
                        setData(filteredProducts);
                      }}
                      colorScheme="red"
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Table;
