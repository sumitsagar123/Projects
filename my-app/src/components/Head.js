import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Head = () => {
  const [none, setnone] = useState(false);
  const closebtn = () => {
    setnone(false);
    // console.log(none);
  };

  const openoption = () => {
    setnone(true);
    // console.log(none);
  };

  return (
    <div>
      <Container>
        <a>
          {" "}
          <img width={120} height={15} src="/images/logo.svg" alt="" />{" "}
        </a>
        <Menu>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
          <a href="#">Solar Roofs</a>
          <a href="#">Solar Panels</a>
          <a href="#">Power wall</a>
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          <a onClick={openoption} href="#">
            Menu
          </a>
        </RightMenu>
        {/* <Fade> */}
        <BurgerNav show={none}>
          <Customclose>
            <MdClose
              onClick={closebtn}
              style={{ color: "red", fontSize: "30px", cursor: "pointer" }}
            />
          </Customclose>
          <li>
            <a href="#"></a>Existing Inventory
          </li>
          <li>
            <a href="#"></a>Used Inventory
          </li>
          <li>
            <a href="#"></a>Trade-in
          </li>
          <li>
            <a href="#"></a>Cybertruck
          </li>
          <li>
            <a href="#"></a>Roadster
          </li>
          <li>
            <a href="#"></a>Existing Inventory
          </li>
          <li>
            <a href="#"></a>Existing Inventory
          </li>
          <li>
            <a href="#"></a>Existing Inventory
          </li>
        </BurgerNav>
        {/* </Fade> */}
      </Container>
    </div>
  );
};

export default Head;

const Container = styled.div`
// border:1px solid red;
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding 0px 20px;
min-width: 100%;
justify-content:space-between;
z-index:1;
a{
  border 0px solid red;
  margin:10px;
}
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  a {
    font-weight: 600;
    font-size:12px
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  a:hover{
    background-color:rgb(142,169,191);
    // transition-delay:1s;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  a {
    font-weight: 500;
    // text-transform: uppercase;
    margin-right: 10px;
  }
  a:hover {
    background-color: rgb(142, 169, 191);
    // transition-delay:1s;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
  // display:none;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const Customclose = styled.div`
  display: flex;
  justify-content: end;
`;
