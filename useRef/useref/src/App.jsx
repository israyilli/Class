import { useEffect, useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
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

function App() {
  // const [data, setData] = useState("");
  const [user, setUser] = useState("");
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  useState(() => {
    axios("https://6556153184b36e3a431efb17.mockapi.io/user").then((res) => {
      // console.log(res.data); //?sonsuz dovre girir burdas
      setUser(res.data);
    }),
      [];
  });
  useState(() => {
    axios("https://6556153184b36e3a431efb17.mockapi.io/products").then(
      (res) => {
        // console.log(res.data); //?sonsuz dovre girir burda
        setProducts(res.data);
      }
    ),
      [];
  });

  return (
    <ChakraProvider>
      <>
        <h4>Username</h4>
        <Input
          value={username}
          placeholder="enter the username"
          onChange={(e) => {
            // console.log(e.target.value);    //yazdigimiz her bir seyi consolda gosterir
            setUsername(e.target.value);
          }}
        />
        <h4>Password</h4>
        <Input
          value={password}
          placeholder="enter the password"
          onChange={(e) => {
            // console.log(e.target.value);
            setPassword(e.target.value);
          }}
        />
        <Button
          colorScheme="blue"
          // onClick={
          //   () => console.log("salam")
          // }
          onClick={() => {
            let users = {
              username: username,
              password: password,
            };
            setUsername("");
            setPassword("");
            axios
              .post("https://6556153184b36e3a431efb17.mockapi.io/user", users)
              .then((res) => {
                //console.log(res.data);
                setData([...data, res.data]); //oz proyektimizde add elediyimiz seyi gormek ucun yaziriq bu kodu
              });
            console.log(setData);
          }}
        >
          Log in
        </Button>
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
              {products.map((element) => {
                // console.log(element.name);
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
                          console.log(products);
                          let filteredProducts = products.filter(
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
    </ChakraProvider>
  );
}

export default App;
