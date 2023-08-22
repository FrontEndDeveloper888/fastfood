import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Button, TextField } from "@mui/material";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { categories as initialCategories } from "../../data/categoryData/categoryData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NavItem({ text }) {
  return (
    <Typography sx={{ padding: "0px 10px", borderLeft: "3px solid #EDEFF3FF" }}>
      {text}
    </Typography>
  );
}

export function Category() {
  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const navProducts = [
    "KATEGORIYA(UZ)",
    "KATEGORIYA(RU)",
    "BOSH KATEGORIYA",
    "ACTION",
  ];

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories"));
    if (storedCategories) {
      setCategories(storedCategories);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const handleSaveChanges = () => {
    if (selectedCategory) {
      const updatedCategories = categories.map((category) =>
        category.id === selectedCategory.id
          ? {
              ...category,
              title: editedTitle,
            }
          : category,
      );
      setCategories(updatedCategories);

      toast.success("Category updated successfully!", {
        position: "top-right",
      });
    } else {
      const newCategory = {
        id: categories.length + 1,
        title: editedTitle,
      };
      setCategories([...categories, newCategory]);

      toast.success("New category added successfully!", {
        position: "top-right",
      });
    }
    handleDrawerClose();
  };

  const handleAddCategory = () => {
    setSelectedCategory(null);
    setEditedTitle(""); // Clear the edited title
    setIsDrawerOpen(true);
  };

  const handleEditCategory = (categoryId) => {
    const selectedCategory = categories.find(
      (category) => category.id === categoryId,
    );
    setSelectedCategory(selectedCategory);
    setEditedTitle(selectedCategory.title);
    setIsDrawerOpen(true);
  };

  const handleDeleteCategory = (categoryId) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== categoryId,
    );
    setCategories(updatedCategories);

    toast.error("Category deleted successfully!", {
      position: "top-right",
    });

    handleDrawerClose();
  };

  const handleDrawerClose = () => {
    setSelectedCategory(null);
    setIsDrawerOpen(false);
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <Box>
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
        {categories.map((category) => (
          <Grid item xs={12} key={category.id}>
            <Card
              sx={{
                width: "100%",
                background: "#ffffff",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                },
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
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "300px",
                    }}
                  >
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
                      {category.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ width: "100px" }}>
                    {category.title} ru
                  </Typography>
                  <Typography color="text.secondary" sx={{ width: "130px" }}>
                    -
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "80px",
                      marginRight: "120px",
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
                      onClick={() => handleEditCategory(category.id)}
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
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      <FiTrash2 />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Button variant="contained" color="success" onClick={handleAddCategory}>
          Add New Category
        </Button>
      </Grid>
      <Drawer
        anchor="right"
        sx={{ zIndex: "10000" }}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <Box sx={{ width: 300, padding: "20px", marginTop: "300px" }}>
          <Typography variant="h6" gutterBottom>
            {selectedCategory ? "Edit Category" : "Add New Category"}
          </Typography>
          <TextField
            label="Category Title"
            variant="outlined"
            fullWidth
            value={editedTitle}
            onChange={handleTitleChange}
            placeholder="Enter category title"
            sx={{ marginBottom: 2 }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
          {selectedCategory && (
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDeleteCategory(selectedCategory.id)}
            >
              Delete
            </Button>
          )}
        </Box>
      </Drawer>
      <ToastContainer position="top-right" autoClose={3000} />
    </Box>
  );
}
