import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { products } from "../../data/products/productsData";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { categories } from "../../data/categoryData/categoryData";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";

function NavItem({ text }) {
  return (
    <Typography
      sx={{
        padding: "0px 10px",
        borderLeft: "3px solid #EDEFF3FF",
      }}
    >
      {text}
    </Typography>
  );
}

export function ListCard() {
  const navProducts = ["MAXSULOT", "KATEGORIYA", "NARXI", "HAJMI", "ACTION"];

  return (
    <>
      <Box
        sx={{
          background: "white",
          alignItems: "center",
          marginTop: "30px",
          padding: "0 200px 0 100px",
          display: "flex",
          justifyContent: "space-between",
          height: "35px",
        }}
      >
        {navProducts.map((text) => (
          <NavItem key={text} text={text} />
        ))}
      </Box>

      <Grid container spacing={1} sx={{ padding: "20px 56px 16px" }}>
        {products.map((product) => {
          const matchedCategory = categories.find(
            (category) => category.id === product.categoryId,
          );

          return (
            <Grid item xs={12} key={product.id}>
              <Card
                sx={{
                  width: "100%",
                  filter: "drop-shadow(0px 2px 2px rgba(174, 176, 181, 0.31))",
                }}
              >
                <CardContent
                  sx={{
                    "&:last-child": {
                      paddingBottom: "10px",
                    },
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "300px",
                      }}
                    >
                      <img
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "20px",
                          objectFit: "cover",
                        }}
                        src={product.img}
                        alt={product.name}
                      />
                      <Typography
                        sx={{
                          color: "#2D3A45",
                          fontFamily: "SFProDisplay",
                          fontSize: "23px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal",
                          marginLeft: "28px",
                        }}
                      >
                        {product.name}
                      </Typography>
                    </Box>
                    <Typography sx={{ marginLeft: "150px", width: "100px" }}>
                      {matchedCategory
                        ? matchedCategory.title
                        : "Unknown Category"}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ marginLeft: "300px", width: "130px" }}
                    >
                      {product.price} UZS
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ marginLeft: "260px", width: "200px" }}
                    >
                      {product.volume}
                    </Typography>
                    <Box
                      sx={{
                        marginLeft: "100px",
                        width: "80px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <IconButton
                        sx={{
                          width: "35px",
                          height: "35px",
                          border: "1px solid grey",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <FiEdit2 />
                      </IconButton>
                      <IconButton
                        sx={{
                          width: "35px",
                          height: "35px",
                          border: "1px solid grey",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <FiTrash2 />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
