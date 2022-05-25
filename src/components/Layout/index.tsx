import React from "react"

import { Grid } from "./styles"
import { ServerList, ServerName, ChannelInfo, ChannelList } from ".."

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
    </Grid>
  )
}

export default Layout
