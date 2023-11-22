"use client";

import styled from "@emotion/styled";

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  font-size: 20px;
  border-radius: 6px;
  background-color: #eee;
  cursor: pointer;

  &:hover {
    background-color: gainsboro;
  }

  &:active {
    transform: scale(0.95);
    background-color: gainsboro;
  }
`;
