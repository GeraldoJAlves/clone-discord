import React, { useRef, useEffect } from "react"

import { ChannelMessage, Mention } from ".."
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles"

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author={"Geraldo Jose"}
            date={"26/05/2022"}
            content={"Hoje não fez frio"}
          />
        ))}
        <ChannelMessage
          author="Teste"
          date="26/05/2022"
          isBot={true}
          hasMention={true}
          content={
            <>
              <Mention>@Geraldo Alves</Mention> Olha a mensagem
            </>
          }
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
