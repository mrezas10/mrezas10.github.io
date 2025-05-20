// ** React Imports
import { useState } from "react";

// Material UI imports
import { AppBar, Toolbar, Typography, Box, Drawer} from "@mui/material";
import { Menu } from "@mui/icons-material";

//Styled Components
import { UnStyledLink } from "./styledComponents";

// ** User Components
import SideBar from "./SideBar";

const TopNav = () => {
  // ** Sidebar Open and Close Hook
  const [sideBar, setSideBar] = useState(false);

  // ** Top Navigation Component
  return (
    <AppBar sx={{ bgcolor: "#330033" }}>
      <Toolbar
        sx={{
          justifyContent: "center",
          gap: "1rem",
          color: "white",
        }}
      >
        <Box
          position={"fixed"}
          left={"1rem"}
          display={{ xs: "block", md: "none" }}
        >
          <Menu
            color="inherit"
            fontSize="large"
            onClick={() => setSideBar(true)}
          />
        </Box>

        <Typography variant="h5" fontFamily={"Lobster"} color={"#ffffff"}>
          <UnStyledLink to={"/"}>Object Detection</UnStyledLink>
        </Typography>
        <Typography
          variant="h6"
          color={"#ffffff"}
          display={{ md: "block", xs: "none" }}
        >
          <UnStyledLink to={"/file"}>Upload an Image</UnStyledLink>
        </Typography>

        <Drawer bgcolor={"#330033"} anchor="left" open={sideBar}>
          <SideBar setSideBar={setSideBar} />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
