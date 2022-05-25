import React from "react"
import { Container } from "./styles"

interface Props {
  isHome?: boolean
  hasNotification?: boolean
  mentions?: number
}

const ServerButton: React.FC<Props> = ({
  isHome,
  hasNotification,
  mentions,
}) => {
  return <Container></Container>
}

export default ServerButton
