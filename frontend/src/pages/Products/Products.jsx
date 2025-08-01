
import ProductModal from './ProductModal';
import {EmptyComponent} from "../../components/Empty";
import { Container,Row,Col, Button, Spinner } from 'react-bootstrap';
import ProductCard from "../../components/ProductCard";
import { fetchProducts, deleteProduct, addProduct, updateProduct } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';


const Products = () => {
const [showModal, setShowModal] = useState(false);
const [editItem, setEditItem] = useState(null);
const dispatch = useDispatch();
const { items, loading } = useSelector((state) => state.products);

console.log("Edited product.", items);

useEffect(() => {
   dispatch(fetchProducts());
}, [dispatch]);

const handleAdd = () => {
   setEditItem(null);
   setShowModal(!showModal)
 };

const handleEdit = (product) => {
   setEditItem(product)
  setShowModal(true);
};
const handleDelete = (id) => {
  dispatch(deleteProduct(id))
 };

 const handleSubmit = (values) => {
   if (editItem) {
     dispatch(updateProduct(values));
   } else {dispatch(addProduct(values))}
 };


return (
<><section>
        <Header/>
        <Container className="mt-4">
          <div className="d-flex justify-content-end mb-4">
            <Button variant="primary" onClick={handleAdd}><i className="bi bi-plus-circle me-2"></i>Add Product</Button>
          </div>
            {loading ? (
            <div className="d-flex justify-content-center align-items-center vh-50">
              <Spinner animation="border" role="status" />
            </div>
          ) : items.length === 0 ? (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
            <EmptyComponent message="We're currently out of stock" /></div>
            ):(
            <Row className="g-4"> 
            {items.map((product) => (
            <Col key={product._id} xs={12} sm={6} md={3} lg={3}>
            <ProductCard product={product} onEdit={() => handleEdit(product)} onDelete={() => handleDelete(product._id)}/></Col>))}</Row>)}
            </Container>
            <ProductModal show={showModal} onClose={() => setShowModal(!showModal)} initialValues={editItem || {title: "", image: "", description: "", price: 0}} onSubmit={handleSubmit} isEdit={!!editItem}/>
          </section></>
)}
export default Products;