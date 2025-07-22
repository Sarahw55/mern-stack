import React from 'react'
import ProductModal from './ProductModal';
import {EmptyComponent} from "../../components/Empty";
import { Container,Row,Col, Button } from 'react-bootstrap';
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
//add actions

const Products = () => {
const [showModal, setShowModal] = useState(false);
const [editItem, setEditItem] = useState(null)
const dispatch = useDispatch()
const { items, loading } = useSelector((state) => state.products);

useEffect(() => {
dispatch(fetchProducts()) [dispatch])};

const handleAdd = () => {
setEditItem(null);
setShowModal(!showModal);
};

const handleEdit = (product) => {
setEditItem(product);
setShowModal(true);
};

return (
<><section>
        <Header/>
        <Container className="mt-4">
          <div className="d-flex justify-content-end mb-4">
            <Button variant="primary" onClick={handleAdd}><i className="bi bi-plus-circle me-2"></i>Add Product</Button>
          </div>
            {loading ?(
            <Row className="g-4">
              {Array(3)
                .fill(null)
                .map((_, index) => (
                <Col key={index} xs={12} sm={6} md={3} lg={3}>
                <SkeletonCard/>
                </Col>))}
            </Row> 
            ):items.length === 0 ? (
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
)
export default Products;