import React from "react"

import { ChannelButton } from ".."
import { Container, Category, AddCategoryIcon } from "./styles"

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="chat-um" />
      <ChannelButton channelName="chat-dois" />
      <ChannelButton channelName="chat-tres" />
      <ChannelButton channelName="chat-quatro" />
    </Container>
  )
}

export default ChannelList
