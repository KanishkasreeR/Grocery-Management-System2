

import React, { useState, useEffect } from 'react';
import { styled, Box, Button, InputBase, FormControl, Select, MenuItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Navbar from "./AdminNavbar";


const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const StyledFormControl = styled(FormControl)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
});

const InputTextField = styled(InputBase)({
    fontSize: '25px',
    flex: '1',
});

const AddProductButton = styled(Button)({
    marginLeft: 'auto',
});

const AddProduct = () => {
    const { adminId: urlAdminId } = useParams();
    const [adminId, setAdminId] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (!adminId) {
            const storedAdminId = localStorage.getItem('adminId');
            if (storedAdminId) {
                setAdminId(storedAdminId);
            } else {
                setAdminId(urlAdminId);
                localStorage.setItem('adminId', urlAdminId);
            }
        }
    }, [adminId, urlAdminId]);

    const [product, setProduct] = useState({
        adminId: adminId,
        productName: '',
        price: '',
        description: '',
        quantity: '',
        category: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setProduct({ ...product, category: e.target.value });
    }

    const handleImageChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    }

    const saveProduct = async () => {
        const formData = new FormData();
        formData.append('adminId', adminId);
        formData.append('productName', product.productName);
        formData.append('price', product.price);
        formData.append('description', product.description);
        formData.append('quantity', product.quantity);
        formData.append('category', product.category);
        formData.append('image', product.image);

        try {
            const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                toast.success('Product added successfully!');
                setProduct({
                    adminId: adminId,
                    productName: '',
                    price: '',
                    description: '',
                    quantity: '',
                    category: '',
                    image: null
                });
            } else {
                toast.error('Failed to add product.');
            }
        } catch (error) {
            console.error('Error occurred while adding product:', error);
            toast.error('Error occurred while adding product.');
        }
    }

    return (
        <>
            <Navbar/>
            <Container>
                <ToastContainer autoClose={2000} />
                <br/><br/><br/><br/>
                <img 
                    src={product.image ? URL.createObjectURL(product.image) : 'https://via.placeholder.com/300'} 
                    alt="Product" 
                    style={{ maxWidth: '100%', height: '300px' }} 
                />

                <StyledFormControl>
                    <InputTextField 
                        onChange={handleChange} 
                        value={product.productName}
                        name='productName' 
                        placeholder="Product Name" 
                    />
                    <InputTextField 
                        onChange={handleChange} 
                        value={product.price}
                        name='price' 
                        placeholder="Price" 
                        type="number"
                    />
                    <InputTextField 
                        onChange={handleChange} 
                        value={product.quantity}
                        name='quantity' 
                        placeholder="Quantity" 
                    />
                     <Select
                        value={category}
                        onChange={handleCategoryChange}
                        displayEmpty
                        style={{ minWidth: '120px' }}
                    >
                         <MenuItem value="" disabled>
                        <em>Select Category</em>
                         </MenuItem>
                        <MenuItem value="Fruits & Vegetables">Fruits & Vegetables</MenuItem>
                        <MenuItem value="Dairy & Bakery">Dairy & Bakery</MenuItem>
                        <MenuItem value="Staples">Staples</MenuItem>
                        <MenuItem value="Snacks & Branded Foods">Snacks & Branded Foods</MenuItem>
                        <MenuItem value="Beverages">Beverages</MenuItem>
                        <MenuItem value="Personal Care">Personal Care</MenuItem>
                        <MenuItem value="Home Care">Home Care</MenuItem>
                        <MenuItem value="Mom & Baby Care">Mom & Baby Care</MenuItem>
                        <MenuItem value="Pets">Pets</MenuItem>
                    </Select>

                    <label htmlFor="fileInput">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLF-LUECE1prSue_wYkv82-H4IPDyDkJqxcQ&s" alt="Edit" style={{ width: '36px', height: '36px' }} />
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                    <AddProductButton onClick={saveProduct} variant="contained" color="primary">Add Product</AddProductButton>
                </StyledFormControl>

                <TextareaAutosize
                    placeholder="Product Description"
                    value={product.description}
                    name='description'
                    onChange={handleChange}
                    style={{ width: '100%', border: 'none', marginTop: '10px', fontSize: '18px', minHeight: '100px', resize: 'vertical' }}
                />
            </Container>
        </>
    )
}

export default AddProduct;






