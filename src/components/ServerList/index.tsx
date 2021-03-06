import React from "react"

import { ServerButton } from ".."
import { Container, Separator } from "./styles"

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={2} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={12} />
      <ServerButton />
    </Container>
  )
}

export default ServerList
