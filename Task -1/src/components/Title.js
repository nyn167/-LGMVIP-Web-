import React from "react";
import styled from "styled-components";

function Title() {
  return <Heading>Schedule Your Plan <span>!!</span></Heading>;
}

export default Title;

const Heading = styled.div`
  text-align: center;
  color: #ffc107;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 50px;
  font-weight: 500;
  margin-top: 65px;
  margin-bottom: 25px;

  span{
    color: #fff;
  }

  @media (max-width: 798px){
    margin-top: 40px;
  }
`;
