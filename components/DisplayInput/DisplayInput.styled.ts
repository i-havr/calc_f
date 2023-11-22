"use client";

import styled from "@emotion/styled";

export const Label = styled.label`
  position: relative;
  display: block;
  margin-bottom: 40px;
`;

export const DisplayInput = styled.input`
  width: 100%;
  height: 100px;
  padding: 0 6px;
  border: 1px solid gainsboro;
  border-radius: 6px;
  outline: none;
  font-size: 32px;
  text-align: right;
  color: #000e1a;
  pointer-events: none;
`;

export const CurrentCalc = styled.span`
  position: absolute;
  bottom: 6px;
  right: 6px;
  font-size: 12px;
  color: gray;
`;
