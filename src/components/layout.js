import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  FiArchive,
  FiBarChart2,
  FiCheckCircle,
  FiLogOut,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";
import { RxLayers } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CiAlignTop, CiGrid2H } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open
    ? {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
}));

export function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(Index);
  const [userActivated, setUserActivated] = useState(false);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState();
  const [vertical, setVertical] = useState();
  // const location = useLocation();

  useEffect(() => {
    const isUserActivated = localStorage.getItem("userActivated") === "true";
    setUserActivated(isUserActivated);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("userActivated");
    setUserActivated(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          height: "80px",
          background: "white",
          color: "#2D3A45",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            width: "100%",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "13px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "15px",
                borderLeft: open ? "0px" : "3px solid #EDEFF3",
                borderRight: "3px solid #EDEFF3",
                height: "80px",
                padding: "0 36px",
              }}
            >
              <IconButton
                sx={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid #20D472",
                  display: "flex",
                  alignItems: "center",
                  background: "#20D472",
                  color: "white",
                  justifyContent: "center",
                  "&:hover": {
                    background: "#1AAE63",
                    border: "1px solid #1AAE63",
                  },
                }}
              >
                +
              </IconButton>
              <Typography
                variant="body2"
                sx={{
                  width: "100px",
                  color: "#2D3A45",
                  textAlign: "left",
                  fontFamily: "SFProDisplay, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Yangi maxsulot qo’shish
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  display: "flex ",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRight: "3px solid #EDEFF3",
                }}
              >
                <Box
                  sx={{
                    width: "1200px",
                    height: "40px",
                    backgroundColor: "#EDEFF3",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 1,
                    mx: "100px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: isActive === 1 ? "#fff" : "",
                      px: "120px",
                      py: "6px",
                      borderRadius: 10,
                      boxShadow:
                        isActive === 1
                          ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                          : "",
                      cursor: "pointer",

                      color: isActive === 1 ? "black" : "#A0A7AD",
                    }}
                    onClick={() => setIsActive(1)}
                  >
                    <Typography sx={{ fontSize: 15 }}>Yangi</Typography>
                  </Box>
                  <Box
                    sx={{
                      px: "100px",
                      py: "6px",
                      borderRadius: 10,
                      backgroundColor: isActive === 2 ? "#fff" : "",
                      boxShadow:
                        isActive === 2
                          ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                          : "",
                      cursor: "pointer",

                      color: isActive === 2 ? "black" : "#A0A7AD",
                    }}
                    onClick={() => setIsActive(2)}
                  >
                    <Typography sx={{ fontSize: 15 }}>
                      Qabul qilingan
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: isActive === 3 ? "#fff" : "",
                      px: "120px",
                      py: "6px",
                      borderRadius: 10,
                      boxShadow:
                        isActive === 3
                          ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                          : "",
                      cursor: "pointer",
                      color: isActive === 3 ? "black" : "#A0A7AD",
                    }}
                    onClick={() => setIsActive(3)}
                  >
                    <Typography sx={{ fontSize: 15 }}>Jo'natilgan</Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: isActive === 4 ? "#fff" : "",
                      px: "120px",
                      py: "6px",
                      borderRadius: 10,
                      boxShadow:
                        isActive === 4
                          ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                          : "",
                      cursor: "pointer",

                      color: isActive === 4 ? "black" : "#A0A7AD",
                    }}
                    onClick={() => setIsActive(4)}
                  >
                    <Typography sx={{ fontSize: 15 }}>Yopilgan</Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "#EDEFF3",
                      gap: "10px",
                      borderRadius: 10,
                      p: 1,
                      mx: "50px",
                      width: "90px",
                      height: "40px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        backgroundColor: vertical === 1 ? "#fff" : "",
                        color: vertical === 1 ? "black" : "#A0A7AD",
                        borderRadius: "50%",
                        cursor: "pointer",
                        boxShadow:
                          vertical === 1
                            ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                            : "",
                      }}
                      onClick={() => setVertical(1)}
                    >
                      <CiGrid2H style={{ fontSize: 20 }} />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        backgroundColor: vertical === 2 ? "#fff" : "",
                        color: vertical === 2 ? "black" : "#A0A7AD",
                        borderRadius: "50%",
                        cursor: "pointer",

                        boxShadow:
                          vertical === 2
                            ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                            : "",
                      }}
                      onClick={() => setVertical(2)}
                    >
                      <CiAlignTop style={{ fontSize: 20 }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <CustomDrawer variant="permanent" open={open}>
        <DrawerHeader sx={{ opacity: open ? 1 : 0 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "28px 24px",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                overflow: "hidden",
                marginRight: "auto",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRmYX4OqLGoOrbQXe2XFcDAbNphmu7dgkdQ&usqp=CAU"
                alt="Profil rasmi"
                width="70px"
                height="70px"
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#2D3A45",
                  fontFamily: "SFProDisplay, sans-serif",
                  fontSize: "16px",
                  width: "74px",
                  height: "19px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Fast Food
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#2D3A45",
                  textAlign: "center",
                  fontFamily: "SFProDisplay, sans-serif",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  opacity: 0.5,
                }}
                style={{ display: open ? "block" : "none" }}
              >
                Onlayn maxsulot sotuvi
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {[
            {
              text: "Buyurtmalar",
              path: "/buyurtmalar",
              icon: (
                <FiCheckCircle
                  sx={{
                    color: "#2D3A45",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                  }}
                />
              ),
            },
            {
              text: "Maxsulotlar",
              path: "/maxsulotlar",
              icon: (
                <FiArchive
                  sx={{
                    color: "#2D3A45",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                  }}
                />
              ),
            },
            {
              text: "Kategoriyalar",
              path: "/kategoriyalar",
              icon: (
                <RxLayers
                  sx={{
                    color: "#2D3A45",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                  }}
                />
              ),
            },
            {
              text: "Filiallar",
              path: "/filiallar",
              icon: (
                <FiMapPin
                  sx={{
                    color: "#2D3A45",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                  }}
                />
              ),
            },
            {
              text: "Mijozlar",
              path: "/mijozlar",
              icon: (
                <FiUsers
                  sx={{
                    color: "#2D3A45",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                  }}
                />
              ),
            },
            {
              text: "Xisobot",
              path: "/xisobot",
              icon: (
                <FiBarChart2
                  sx={{
                    color: "#2D3A45",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                  }}
                />
              ),
            },
            {
              text: "Katalog",
              path: "/katalog",
              icon: (
                <CiSettings
                  sx={{
                    color: "#2D3A45",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                  }}
                />
              ),
            },
          ].map(({ text, icon, path }, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate(path)}
                sx={{
                  borderLeft: open ? "5px solid #FCB600" : "0px ",
                  minHeight: 48,
                  justifyContent: "center",
                  px: "10px",
                  width: "276px",
                  height: "48px",
                  flexShrink: 0,
                  borderRadius: "0px 6px 6px 0px",
                  backgroundColor:
                    activeIndex === index ? "#FCB600" : "transparent",
                  color: activeIndex === index ? "white" : "#2D3A45",
                  "&:hover": {
                    backgroundColor:
                      activeIndex === index ? "#FCB600" : "rgba(252,218,0,0.7)",
                    color: activeIndex === index ? "white" : "#2D3A45",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    flexShrink: 0,
                    borderRadius: "6px",
                    background: "#F6F6F6",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: open ? "#2D3A45" : "white",
                    fontFamily: "SFProDisplay, sans-serif",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItemButton
            onClick={handleLogOut}
            sx={{
              borderLeft: open ? "5px solid #FCB600" : "0px ",
              minHeight: 48,
              justifyContent: "center",
              px: "10px",
              width: "276px",
              height: "48px",
              flexShrink: 0,
              borderRadius: "0px 6px 6px 0px",
              position: "absolute",
              bottom: -500,
              "&:hover": {
                backgroundColor: "rgba(252,218,0,0.7)",
                color: "white",
              },
            }}
          >
            <ListItemIcon
              sx={{
                justifyContent: "center",
                width: "36px",
                height: "36px",
                flexShrink: 0,
                borderRadius: "6px",
                background: "#F6F6F6",
                alignItems: "center",
              }}
            >
              <FiLogOut
                sx={{
                  color: "#2D3A45",
                  width: "16px",
                  height: "16px",
                  flexShrink: 0,
                }}
              />
            </ListItemIcon>
            <ListItemText
              sx={{
                opacity: open ? 1 : 0,
                color: open ? "#2D3A45" : "white",
                fontFamily: "SFProDisplay, sans-serif",
                marginLeft: "20px",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Chiqish
            </ListItemText>
          </ListItemButton>
        </List>
      </CustomDrawer>
      <Box
        component="main"
        sx={{
          background: "#EDEFF3",
          marginTop: "80px",
          width: "100%",
          minHeight: "92vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
