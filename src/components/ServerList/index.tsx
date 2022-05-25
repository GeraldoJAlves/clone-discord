import React from "react"

import { ServerButton } from ".."
import { Container, Separator } from "./styles"

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />

      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton mentions={2} />
      <ServerButton />
    </Container>
  )
}

export default ServerList
