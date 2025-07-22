import React from 'react'
import Header from '../../components/Header';

const Contacts = () => {
    return (
        <section>
            <Header/>
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="text-center p-4 border rounded bg-white shadow-sm">
            <h2 className="mb-4">Contact Us</h2>
            <p className="mb-2">
            <strong>Address:</strong> 000 Harbour St, Halifax, CA 284712</p>
            <p className="mb-2">
            <strong>email:</strong> example@gmail.com</p>
            <p>
            <strong>phone:</strong> +1 (000) 000-0000</p>
            </div>
            </div>
        </section>
    )}
export default Contacts