import React from "react"

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles"

interface Props {
  userName: string
  userId: number
}

const UserInfo: React.FC<Props> = ({ userName, userId }) => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>{userName}</strong>
          <span>#{userId}</span>
        </UserData>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo
