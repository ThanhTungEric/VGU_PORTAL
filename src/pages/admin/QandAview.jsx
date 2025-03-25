import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Modal, Typography, IconButton, Autocomplete } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { QandAcolumn } from "../../libs/QandAstructure.js";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function QandAview() {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]); 
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const [form, setForm] = useState({
        category: "",
        question: "",
        answer: "",
    });

    // Fetch all questions
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:9090/all-questions");
                const rows = response.data.map((item, index) => ({
                    id: item.id || index + 1,
                    category: item.category || "",
                    question: item.question,
                    answer: item.answer,
                    hidden: item.hidden || false,  
                }));
                setData(rows);
            } catch (error) {
                console.error("Error fetching all questions:", error);
            }
        };

        fetchData();
    }, []);

    // Fetch categories from API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:9090/all-categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleCategoryChange = (event, value) => {
        setForm({ ...form, category: value ? value.category : "" });  // Ensure category is stored as a string
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddData = async () => {
        if (!form.category || !form.question || !form.answer) {
            alert("All fields are required!");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:9090/add-question", form);
            if (response.status === 200) { 
                // Refresh data after successful addition
                const updatedResponse = await axios.get("http://127.0.0.1:9090/all-questions");
                setData(updatedResponse.data);

                // Reset form & close modal
                setForm({ category: "", question: "", answer: "" });
                setOpen(false);
            }
        } catch (error) {
            console.error("Error adding question:", error);
        }
    };

    const handleEditClick = (row) => {
        setSelectedRow(row);
        setForm({ category: row.category, question: row.question, answer: row.answer });
        setEditOpen(true);
    };

    const handleEditSubmit = async () => {
        if (!selectedRow) return;
        try {
            const response = await axios.put(`http://127.0.0.1:9090/update-question/${selectedRow.id}`, form);
            
            if (response.status === 200) {
                alert("Question updated successfully!");  // ✅ Feedback to user
                setEditOpen(false);
                fetchData();  // ✅ Re-fetch data instead of manually modifying state
            }
        } catch (error) {
            console.error("Error updating question:", error);
            alert("Failed to update question. Please check if the category exists.");  // ✅ Show error
        }
    };
    

    const handleHideClick = async (id) => {
        try {
            await axios.patch(`http://127.0.0.1:9090/hide-question/${id}`);
            setData(data.map((row) => 
                row.id === id ? { ...row, hidden: !row.hidden } : row
            ));
        } catch (error) {
            console.error("Error toggling question visibility:", error);
        }
    };

    const columns = [
        ...QandAcolumn.filter(col => col.field !== "action"),
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => (
                <>
                    <IconButton onClick={() => handleEditClick(params.row)}>
                        <EditIcon color="primary" />
                    </IconButton>
                    <IconButton onClick={() => handleHideClick(params.row.id)}>
                        <VisibilityOffIcon color="secondary" />
                    </IconButton>
                </>
            ),
        },
    ];

    return (
        <Box sx={{ width: "100%", padding: 2 }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 2
            }}>
                <Typography variant="h5">List of Questions</Typography>
                <Button variant="contained" onClick={() => setOpen(true)}>Add Question</Button>
            </Box>

            <Box sx={{
                height: 500,
                width: "95%",
                overflow: "auto",
                border: "1px solid #ddd",
                borderRadius: "5px"
            }}>
                <DataGrid 
                    rows={data} 
                    columns={columns} 
                    pageSize={5} 
                    sx={{ 
                        width: "100%",
                        "& .MuiDataGrid-row.hidden": {
                            filter: "blur(3px)", 
                        }
                    }} 
                    getRowClassName={(params) => (params.row.hidden ? "hidden" : "")}
                />
            </Box>

            {/* Edit Question Modal */}
            <Modal open={editOpen} onClose={() => setEditOpen(false)}>
                <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "white", boxShadow: 24, p: 3, borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>Edit Question</Typography>
                    <Autocomplete
                        options={categories}
                        getOptionLabel={(option) => option.category}
                        value={form.category || null}
                        onChange={handleCategoryChange}
                        renderInput={(params) => <TextField {...params} label="Category" fullWidth sx={{ marginBottom: 2 }} />}
                    />
                    <TextField label="Question" name="question" value={form.question} onChange={handleChange} fullWidth sx={{ marginBottom: 2 }} />
                    <TextField label="Answer" name="answer" value={form.answer} onChange={handleChange} fullWidth sx={{ marginBottom: 2 }} />
                    <Button variant="contained" onClick={handleEditSubmit} fullWidth>Update</Button>
                </Box>
            </Modal>

            {/* Add New Question Modal */}
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "white",
                    boxShadow: 24,
                    p: 3,
                    borderRadius: 2
                }}>
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>Add New Question</Typography>
                    <Autocomplete
                        options={categories}
                        getOptionLabel={(option) => option.category}
                        value={categories.find(cat => cat.category === form.category) || null}
                        onChange={handleCategoryChange}
                        renderInput={(params) => (
                            <TextField {...params} label="Category" fullWidth sx={{ minWidth: 300, marginBottom: 2 }} />
                        )}
                        componentsProps={{ paper: { sx: { maxHeight: 200, overflowY: "auto" } } }}
                    />
                    <TextField label="Question" name="question" value={form.question} onChange={handleChange} fullWidth sx={{ marginBottom: 2 }} />
                    <TextField label="Answer" name="answer" value={form.answer} onChange={handleChange} fullWidth sx={{ marginBottom: 2 }} />
                    <Button variant="contained" onClick={handleAddData} fullWidth>Submit</Button>
                </Box>
            </Modal>
        </Box>
    );
}
