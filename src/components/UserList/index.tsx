import React from "react"

import { Container, Role, User, Avatar } from "./styles"

interface UserProps {
  nickname: string
  isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Geraldo Alves" />
      <Role>Offline - 6 </Role>
      <UserRow nickname="Marcos Soares" isBot />
      <UserRow nickname="Matheus" />
      <UserRow nickname="Diego" />
      <UserRow nickname="Daniel" />
      <UserRow nickname="Ericka" />
      <UserRow nickname="Shedman" />
    </Container>
  )
}

export default UserList
