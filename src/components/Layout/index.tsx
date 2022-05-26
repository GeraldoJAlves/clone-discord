import React from "react"

import {
  ServerList,
  ServerName,
  ChannelInfo,
  ChannelList,
  ChannelData,
  UserInfo,
  UserList,
} from ".."
import { Grid } from "./styles"

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo userName={"Geraldo Alves"} userId={122} />
      <UserList />
      <ChannelData />
    </Grid>
  )
}

export default Layout
