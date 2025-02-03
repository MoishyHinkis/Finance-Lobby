import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "@inertiajs/react";
import { Typography } from "@mui/material";
import { after, trimStart } from "lodash";

const drawerWidth = 240;

const Layout = ({ children }) => {
    const currentScreen = trimStart(window.location.pathname, "/");

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            href="screen-1"
                            selected={currentScreen === "screen-1"}
                            component={Link}
                        >
                            <ListItemText>Screen 1</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton disabled
                            href="screen-2"
                            selected={currentScreen === "screen-2"}
                            component={Link}
                        >
                            <ListItemText>Screen 2</ListItemText>
                        </ListItemButton>{" "}
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton disabled
                            href="screen-3"
                            selected={currentScreen === "screen-3"}
                            component={Link}
                        >
                            <ListItemText>Screen 3</ListItemText>
                        </ListItemButton>{" "}
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
