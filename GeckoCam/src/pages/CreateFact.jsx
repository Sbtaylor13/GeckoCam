import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateFact = () => {
  let navigate = useNavigate();
  const initialValue = {
    title: "",
    fact: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    fact: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/facts", data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        navigate("/");
      });
  };

  return (
    <div className="w-screen h-screen bg-zinc-800 pt-10">
      {" "}
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="">
          <label className="text-yellow-600 pl-8 pr-2">Title: </label>
          <Field autoComplete="off" id="inputCreatePost" name="title"></Field>

          <label className="text-yellow-600 pl-8 pr-2">Fact: </label>
          <Field autoComplete="off" id="inputCreatePost" name="fact"></Field>
          <button
            type="submit"
            className="ml-8 pl-5 pr-5 pt-2 pb-2 text-black bg-yellow-600"
          >
            Create Post
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateFact;
