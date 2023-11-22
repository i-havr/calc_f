"use client";

import styled from "@emotion/styled";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MainButtonsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
