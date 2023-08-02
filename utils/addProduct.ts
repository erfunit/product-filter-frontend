import { Data } from "@/types/formdata";
import axios from "axios";
import { Dispatch, FormEvent, SetStateAction } from "react";
import resetForm from "./resetForm";

export default function onAddProduct(
  event: FormEvent,
  data: Data,
  setData: Dispatch<SetStateAction<Data>>
) {
  event.preventDefault();
  axios
    .post("http://127.0.0.1:5001/products", {
      ...data,
    })
    .then((res) => {
      console.log(res);
      resetForm(setData);
    })
    .catch((err) => console.error(err));
}
