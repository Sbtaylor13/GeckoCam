import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const CreateFact = () => {
  const initialValue = {
    title: "",
    fact: "",
    user_id: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    fact: Yup.string().required(),
    user_id: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/facts", data).then((response) => {
      console.log("it worky");
    });
  };

  return (
    <div className="createPostPage">
      {" "}
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" className="bg-red-400" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="Insert Title Here"
          ></Field>

          <label>Fact: </label>
          <ErrorMessage name="fact" className="bg-red-400" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="fact"
            placeholder="Insert Fact Here"
          ></Field>

          <label>Username: </label>
          <ErrorMessage className="bg-red-400" name="user_id" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="user_id"
            placeholder="Insert Username Here"
          ></Field>

          <button type="submit"> Create Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateFact;
