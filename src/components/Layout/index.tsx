import React from "react"

import { ServerList, ServerName, ChannelInfo, ChannelList } from ".."
import { Grid } from "./styles"

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
