"use client";
import { buttonFill, buttonRegular, inputStyle } from "@/theme/input";
import { Data } from "@/types/formdata";
import onAddProduct from "@/utils/addProduct";
import resetForm from "@/utils/resetForm";
import React, { ChangeEvent, FormEvent, useState } from "react";

const AdminPage = () => {
  const [data, setData] = useState<Data>({
    name: "",
    price: 0,
    tags: [],
    description: "",
  });

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.name === "tags") {
      setData({ ...data, tags: e.target.value.split(",") });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <form
        onSubmit={(event) => onAddProduct(event, data, setData)}
        className="mx-auto max-w-screen-sm "
      >
        <h1 className="mb-2 text-2xl font-bold text-white/30">ADMIN FORM</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xl">
              Name:
            </label>
            <input
              value={data.name}
              onChange={(e) => onChangeHandler(e)}
              type="text"
              name="name"
              placeholder="the name of product..."
              className={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xl">
              Price:
            </label>
            <input
              value={data.price}
              type="text"
              onChange={(e) => onChangeHandler(e)}
              name="price"
              placeholder="enter price here..."
              className={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xl">
              Tags:
            </label>
            <input
              value={data.tags.join(",")}
              placeholder="tag1,tag2,tag3"
              type="text"
              onChange={(e) => onChangeHandler(e)}
              name="tags"
              className={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xl">
              Description:
            </label>
            <textarea
              name="description"
              onChange={(e) => onChangeHandler(e)}
              value={data.description}
              placeholder="tell about product..."
              className={`${inputStyle} h-[130px]`}
            />
          </div>
        </div>
        <div className="py-6 flex gap-4 justify-center w-full ">
          <button className={buttonFill} type="submit">
            Add To Products
          </button>
          <button
            onClick={(e) => resetForm(setData)}
            className={buttonRegular}
            type="reset"
          >
            reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
