import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../assets/react.svg";

const Signup = () => {

const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().min(6, "Min 6 characters").required("Password required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords needs to match").required("Confirm password")
});
  return (
    <div className="signup-container">
      <div className="signup-card shadow p-4">
        <div className="text-center mb-4">
          <img className="logo" src={logo} alt="Logo" style={{ width: "200px", cursor: "pointer" }} onClick={() => navigate("/")}/>
        </div>
        <h3 className="mb-4 text-center">Sign Up!</h3>
        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: ""}}
          validationSchema={SignupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {console.log("Form values", values);
             const success = await dispatch(signup(values));
            setSubmitting(false);
          }}
          > 
          {({ isSubmitting }) => (
            <Form>
            <div className="mb-3">
            <label className="form-label">Name</label>
            <Field type="text" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger"/>
            </div>
            <div className="mb-3">
            <label className="form-label">Email</label>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger"/>
            </div>
            <div className="mb-3">
            <label className="form-label">Password</label>
            <Field type="password" name="password" className="form-control"/>
            <ErrorMessage name="password" component="div" className="text-danger"/>
            </div>
            <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <Field type="password" name="confirmPassword" className="form-control"/>
            <ErrorMessage name="confirmPassword" component="div" className="text-danger"/>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3" disabled={isSubmitting}> {isSubmitting ? "Signing up." : "Sign Up!"}</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )};
export default Signup;