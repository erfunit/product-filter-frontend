import { Data } from "@/types/formdata";
import { Dispatch, SetStateAction } from "react";

export default function resetForm(setData: Dispatch<SetStateAction<Data>>) {
  setData({
    name: "",
    price: 0,
    tags: [],
    description: "",
  });
}
