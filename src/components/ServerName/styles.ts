import styled from "styled-components"
import { MdExpandMore } from "react-icons/md"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 11px 0 16px;
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

  grid-area: SN;
  z-index: 2;
`

export const Title = styled.h1`
  color: var(--white);
  font-weight: bold;
  font-size: 16px;
`

export const ExpandIcon = styled(MdExpandMore)`
  width: 28px;
  height: 28px;

  fill: var(--white);
  cursor: pointer;
`
