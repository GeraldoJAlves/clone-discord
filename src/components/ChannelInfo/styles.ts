import styled from "styled-components"
import { HiOutlineHashtag } from "react-icons/hi"

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 17px;

  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`

export const Title = styled.h1`
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
  margin-left: 9px;
`

export const HashtagIcon = styled(HiOutlineHashtag)`
  color: var(--symbol);
  width: 24px;
  height: 24px;
`

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  margin: 0 13px;
  background-color: var(--white);
  opacity: 0.2;
`

export const Description = styled.span`
  color: var(--gray);
  font-size: 15px;
`
