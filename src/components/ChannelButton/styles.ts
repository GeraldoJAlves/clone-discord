import styled, { css } from "styled-components"
import { HiOutlineHashtag } from "react-icons/hi"
import { MdPersonAdd, MdSettings } from "react-icons/md"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > span {
    margin-left: 5px;
    color: var(--senary);
    width: 100%;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    & > div > span {
      color: var(--white);
    }

    & > div > svg {
      display: unset;
    }
  }
`

export const HashtagIcon = styled(HiOutlineHashtag)`
  color: var(--symbol);
  width: 20px;
  height: 20px;
`
const CSSIcon = css`
  display: none;
  color: var(--symbol);
  width: 16px;
  height: 16px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`

export const InviteIcon = styled(MdPersonAdd)`
  ${CSSIcon}
`

export const SettingsIcon = styled(MdSettings)`
  ${CSSIcon}
  margin-left: 4px;
`
