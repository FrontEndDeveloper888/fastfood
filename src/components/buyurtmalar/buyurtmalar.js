import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {MenuItem} from "@mui/material";

export function Orders() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [newOrder, setNewOrder] = useState({
        id: "",
        user: "",
        phone: "",
        status: "Yangi",
        total_price: "",
        payment_type: "",
        operator: "Pulatov M",
        branch: "",
    });
    const [storedOrders, setStoredOrders] = useState([]);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    useEffect(() => {
        // Local storage dan ma'lumotlarni olish
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setStoredOrders(storedOrders);
    }, []);

    useEffect(() => {
        // Ma'lumotlar almashinuvi bo'lganda lokal storageda yangilash
        localStorage.setItem("orders", JSON.stringify(storedOrders));
    }, [storedOrders]);

    const handleOrderDetails = (order) => {
        setSelectedOrder(order);
        setDrawerOpen(true);
    };

    const handleAddOrder = () => {
        setDrawerOpen(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value,
        }));
    };

    const handleSaveNewOrder = () => {
        // Yangi buyurtmani ro'yhatga qo'shish
        const updatedOrders = [...storedOrders, newOrder];
        setStoredOrders(updatedOrders);
        setDrawerOpen(false);
    };

    return (
        <Grid container spacing={1} sx={{ padding: "16px" }}>
            {storedOrders.map((order) =>  (
                <Grid item xs={12} sm={6} md={4} key={order.id}>
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
                                height: "100%",
                            }}
                        >
                            <Typography variant="h5" component="div">
                                User: {order.user}
                            </Typography>
                            <Typography color="text.secondary">
                                Phone: {order.phone}
                            </Typography>
                            <Typography color="text.secondary">
                                Status: {order.status}
                            </Typography>
                            <Typography color="text.secondary">
                                Total Price: ${order.total_price}
                            </Typography>
                            <Typography color="text.secondary">
                                Payment Type: {order.payment_type}
                            </Typography>
                            <Typography color="text.secondary">
                                Operator: {order.operator}
                            </Typography>
                            <Typography color="text.secondary">
                                Branch: {order.branch}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            <Button onClick={handleAddOrder}>Add order</Button>
            <Drawer anchor="right" sx={{zIndex:"10000"}} open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: "350px", padding: "16px" }}>
                    <Typography variant="h6" component="div">
                        Add New Order
                    </Typography>
                    <TextField
                        label="User"
                        name="user"
                        value={newOrder.user}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Phone"
                        name="phone"
                        value={newOrder.phone}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Total Price"
                        name="total_price"
                        value={newOrder.total_price}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Payment Type"
                        name="payment_type"
                        value={newOrder.payment_type}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        />
                    <TextField
                        label="Branch"
                        name="branch"
                        value={newOrder.branch}
                        onChange={handleInputChange}
                        select
                        fullWidth
                        margin="normal"
                        sx={{ marginTop: "16px" }}
                    >
                        <MenuItem value="Maksim Gorkiy">Maksim Gorkiy</MenuItem>
                        <MenuItem value="Another Branch">Another Branch</MenuItem>
                    </TextField>


                    <Button onClick={handleSaveNewOrder}>Save</Button>
                </Box>
            </Drawer>
        </Grid>
    );
}
