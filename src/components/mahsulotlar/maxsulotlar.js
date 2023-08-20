import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import { products } from "../../data/products/productsData";
import { categories } from "../../data/categoryData/categoryData";

export function ListCard() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [newProductData, setNewProductData] = useState({
        productName: "",
        // Add more fields for other product details
    });

    const handleProductButtonClick = (product) => {
        console.log("Button clicked for product:", product);
    };

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddProduct = (event) => {
        event.preventDefault();
        // Implement logic to add the new product using the newProductData
        console.log("New product data:", newProductData);
        setNewProductData({
            productName: "",
            // Reset other fields
        });
        handleDrawerClose();
    };
    return (
        <Grid container spacing={1} sx={{ padding: "20px 56px 16px" }}>
            {products.map((product) => {
                const category = categories.find((cat) => cat.id === product.categoryId);
                const categoryTitle = category ? category.title : "Unknown Category";

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
                                    }, padding: "10px", display: "flex", alignItems: "center", justifyContent: "space-between",
                                }}
                            >
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <img
                                            style={{
                                                width: "40px", height: "40px", borderRadius: "50%", marginLeft: "20px",
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
                                    <Typography>
                                        Category: {categoryTitle}
                                    </Typography>
                                </Box>
                                <Typography color="text.secondary">
                                    Price: ${product.price}
                                </Typography>
                                <Typography color="text.secondary">
                                    Status: {product.status}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })} <Button variant="contained" onClick={handleDrawerOpen}>
            Yangi maxsulot qo'shish
        </Button>
            <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
                <Box sx={{ width: 300, padding: "20px" }}>
                    <Typography variant="h6">Yangi Maxsulot Qo'shish</Typography>
                    <form onSubmit={handleAddProduct}>
                        <TextField
                            label="Maxsulot Nomi"
                            name="productName"
                            value={newProductData.productName}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        {/* Boshqa maxsulot ma'lumotlari uchun yana input maydonlarni qo'shing */}
                        <Button type="submit" variant="contained" color="primary">
                            Qo'shish
                        </Button>
                    </form>
                </Box>
            </Drawer>
        </Grid>
    );
}
