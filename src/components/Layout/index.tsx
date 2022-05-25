import React from "react"

import { Grid } from "./styles"
import { ServerList, ServerName } from ".."

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList></ServerList>
    </Grid>
  )
}

export default Layout
