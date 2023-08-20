import React, { useState } from "react";
import { Box, TextField, Button, Collapse } from "@mui/material";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

function LoginPage({ setUserActivated }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const submit = () => {
        if (login === " " && password === " ") {
            setUserActivated(true);
            localStorage.setItem("userActivated", "true");
        } else {
            setError(true);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            submit();
        }
    };

    return (
        <Box sx={{ display: "flex", height: "100vh",background: "#EDEFF3"}}>
            <img
                alt=""
                src={require("./3390.png")}
                style={{ objectFit: "cover", width: "60%", height: "100vh" }}
            />
            <Box
                sx={{
                    width: "40%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    p: 2,
                }}
            >
                <Typography variant="h1" sx={{ margin: "15px", fontSize: 24, color: "#2D3A45", fontWeight: 700 }}>
                    Tizimga xush kelibsiz!
                </Typography>
                <Typography
                    sx={{ fontFamily: "SFProDisplay, sans-serif", fontSize: "16px", color: "#8D9BA8", width: "330px"}}
                >
                    Tizimga kirish uchun, login va parol orqali autentifikatsiya jarayonidan o’ting
                </Typography>
                <Box
                    sx={{
                        width: "300px",
                        borderRadius: "6px",
                        backgroundColor: "#FFF",
                        boxShadow: "0px 20px 25px 0px rgba(176, 177, 181, 0.43)",
                        mt: 3,
                        p: 2,
                        mb: 3,
                    }}
                >
                    <TextField
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder={"Email"}
                        inputMode="email"
                        fullWidth
                        sx={{ border: "none", height: "50%", color: "#2F2F2F", fontFamily: "SFProDisplay", fontSize: "18px" }}
                        onKeyPress={handleKeyPress}
                    />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={"Parol"}
                        type={"password"}
                        fullWidth
                        sx={{ border: "none", height: "50%" }}
                        onKeyPress={handleKeyPress}
                    />
                </Box>
                <Button
                    onClick={submit}
                    sx={{
                        width: "330px",
                        height: "70px",
                        borderRadius: "6px",
                        opacity: 0.8,
                        backgroundColor: "#2D3A45",
                        boxShadow: "0px 2px 2px 0px rgba(174, 176, 181, 0.31)",
                        "&:hover": { backgroundColor: "#2D3A45", opacity: 0.8, boxShadow: "0px 2px 2px 0px rgba(174, 176, 181, 0.31)" },
                    }}
                >
                    <Typography sx={{ color: "#FFF", fontFamily: "SFProDisplay", fontSize: "15px" }}>Tizimga kirish</Typography>
                </Button>
                <Collapse in={error} sx={{ mt: 2, }}>
                    <Alert variant="filled" severity="error">
                        Noto'g'ri login yoki parol kiritildi.
                    </Alert>
                </Collapse>
            </Box>
        </Box>
    );
}

export default LoginPage;
