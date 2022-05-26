import styled, { css } from "styled-components"

import { MdMic, MdHeadset, MdSettings } from "react-icons/md"

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);

  position: relative;
  flex-shrink: 0;

  &::after {
    position: absolute;
    content: "";
    right: 0px;
    bottom: 0px;
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: red;
    border: 1px solid var(--quaternary);
  }
`
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;

  & > strong {
    display: block;
    font-size: 13px;
    color: var(--white);
  }
  & > span {
    font-size: 13px;
    color: var(--gray);
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg:not(:first-child) {
    margin-left: 7px;
  }
`

const CSSIcon = css`
  color: var(--white);
  width: 20px;
  height: 20px;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`

export const MicIcon = styled(MdMic)`
  ${CSSIcon}
`
export const HeadphoneIcon = styled(MdHeadset)`
  ${CSSIcon}
`
export const SettingsIcon = styled(MdSettings)`
  ${CSSIcon}
`
