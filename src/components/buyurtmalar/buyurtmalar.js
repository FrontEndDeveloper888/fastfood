    import React from "react";
    import Card from "@mui/material/Card";
    import CardContent from "@mui/material/CardContent";
    import Typography from "@mui/material/Typography";
    import Button from "@mui/material/Button";
    import { products } from "../../data/products/productsData";
    import Grid from "@mui/material/Grid";
    import Box from "@mui/material/Box";

    export function Cards() {
        return (
            <>
                <Grid container spacing={1} sx={{ padding: "16px" }}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
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
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        height: "100%", // Make sure the content stretches to the bottom
                                    }}
                                >
                                    <Button variant="outlined">
                                        {product.id}
                                    </Button>
                                    <Typography variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Price: ${product.price}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Status: {product.status}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </>
        );
    }
