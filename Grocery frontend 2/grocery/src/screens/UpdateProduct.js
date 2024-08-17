import React, { useState, useEffect } from "react";
import Navbar from "./AdminNavbar";
import { InputBase, FormControl, Button, Box, styled } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';

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


const UpdateProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log("Product id: " + id);

    const [updatedProduct, setUpdatedProduct] = useState({
        productName: '',
        price: '',
        description: '',
        quantity: '',
        category: '',
        image: null
    });

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/product/${id}`);
            if (response.ok) {
                const product = await response.json();
                setUpdatedProduct({
                    productName: product.productName,
                    price: product.price,
                    description: product.description,
                    quantity: product.quantity,
                    category: product.category,
                    image: product.imageUrl
                });
            } else {
                console.error("Failed to fetch product");
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct({ ...updatedProduct, [name]: value });
    }

    const handleImageChange = (e) => {
        setUpdatedProduct({ ...updatedProduct, image: e.target.files[0] });
    }

    const saveProduct = async () => {
        const formData = new FormData();
        formData.append('productName', updatedProduct.productName);
        formData.append('price', updatedProduct.price);
        formData.append('description', updatedProduct.description);
        formData.append('quantity', updatedProduct.quantity);
        formData.append('category', updatedProduct.category);
        formData.append('image', updatedProduct.image);

        try {
            const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/editproduct/${id}`, {
                method: 'PATCH',
                body: formData
            });

            if (response.ok) {
                toast.success('Product edited successfully');
                navigate("/");
            } else {
                toast.error('Failed to edit product.');
            }
        } catch (error) {
            console.error('Error occurred while editing product:', error);
            toast.error('Error occurred while editing product.');
        }
    }

    return (
        <>
            <Navbar />
            <Container>
                <ToastContainer autoClose={2000} />
                <>
                    <img
                        src={updatedProduct.image ? updatedProduct.image : 'https://via.placeholder.com/300'}
                        alt="Product"
                        style={{ maxWidth: '100%', height: '300px' }}
                    />

                    <StyledFormControl>
                        <InputTextField
                            onChange={handleChange}
                            value={updatedProduct.productName}
                            name='productName'
                            placeholder="Product Name"
                        />
                        <InputTextField
                            onChange={handleChange}
                            value={updatedProduct.price}
                            name='price'
                            placeholder="Price"
                            type="number"
                        />
                        <InputTextField
                            onChange={handleChange}
                            value={updatedProduct.quantity}
                            name='quantity'
                            placeholder="Quantity"
                        />
                        <InputTextField
                            onChange={handleChange}
                            value={updatedProduct.category}
                            name='category'
                            placeholder="Category"
                        />
                        <label htmlFor="fileInput">
                            <Add fontSize="large" color="action" />
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                        />
                        <AddProductButton onClick={saveProduct} variant="contained" color="primary">Save</AddProductButton>
                    </StyledFormControl>

                    <TextareaAutosize
                        placeholder="Product Description"
                        value={updatedProduct.description}
                        name='description'
                        onChange={handleChange}
                        style={{ width: '100%', border: 'none', marginTop: '10px', fontSize: '18px', minHeight: '100px', resize: 'vertical' }}
                    />
                </>
            </Container>
        </>
    )
}

export default UpdateProduct;







