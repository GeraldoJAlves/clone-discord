import React from "react"

import { Grid } from "./styles"
import { ServerList, ServerName, ChannelInfo } from ".."

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList></ServerList>
      <ServerName></ServerName>
      <ChannelInfo></ChannelInfo>
    </Grid>
  )
}

export default Layout
