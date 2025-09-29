"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "El nombre es muy corto")
        .max(50, "El nombre es muy largo")
        .required("El nombre es obligatorio"),
      email: Yup.string()
        .email("El correo no es válido")
        .required("El correo es obligatorio"),
      phone: Yup.string()
        .min(7, "El número es muy corto")
        .max(15, "El número es muy largo")
        .required("El número es obligatorio"),
      message: Yup.string()
        .min(10, "El mensaje es muy corto")
        .max(500, "El mensaje es muy largo")
        .required("El mensaje es obligatorio"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-8 w-full max-w-lg mx-auto"
    >
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          className="p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-primary"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        ) : null}
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          className="p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-primary"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
        <input
          type="text"
          name="phone"
          placeholder="Tu número de teléfono"
          className="p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-2 focus:border-primary"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
        ) : null}

        <textarea
          name="message"
          placeholder="Tu mensaje"
          className="p-2 border border-gray-300 rounded-xl resize-none h-48 focus:outline-none focus:border-2 focus:border-primary"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-500 text-sm">{formik.errors.message}</div>
        ) : null}
      </div>
      <button
        type="submit"
        className="mt-4 px-8 py-1 bg-light text-primary border border-primary rounded hover:bg-primary hover:text-light cursor-pointer"
      >
        Enviar
      </button>
    </form>
  );
}
