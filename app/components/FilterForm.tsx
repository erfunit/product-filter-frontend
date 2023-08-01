import { Data } from "@/types/formdata";
import React, { FormEvent, useState } from "react";
import { Slider } from "@mui/material";
import { buttonRegular } from "@/theme/input";

interface FilterFormProps {
  fetchData: (url: string) => Promise<string | Data[]>;
}

const FilterForm = ({ fetchData }: FilterFormProps) => {
  const [data, setData] = useState({
    search: "",
    categorie: "",
    onlyExist: false,
    onlyOffers: false,
    priceRange: [0, 300000],
  });

  const [formattedPriceRange, setFormattedPriceRange] = useState([
    "0",
    "300,000",
  ]);

  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    if (typeof newValue !== "number") {
      const roundedValue = newValue.map(
        (value) => Math.round(value / 5000) * 5000
      );
      const formattedValue = roundedValue.map((value) =>
        value.toLocaleString("en-US")
      );
      setData((prev) => ({ ...prev, priceRange: roundedValue }));
      setFormattedPriceRange(formattedValue);
    }
  };

  async function onSetSearchFilter(e: FormEvent) {
    await fetchData(`/products?search=${data.search}`);
  }

  return (
    <form onSubmit={(e) => onSetSearchFilter(e)}>
      <input
        type="search"
        value={data.search}
        onChange={(event) => setData({ ...data, search: event.target.value })}
      />
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={data.priceRange}
        onChange={(event: Event, newValue) =>
          handlePriceRangeChange(event, newValue)
        }
        valueLabelDisplay="auto"
        min={0}
        max={300000}
        sx={{
          track: {
            color: "#3868B0", // Replace with your desired color
          },
          rail: {
            color: "#457CCF", // Replace with your desired color
          },
        }}
      />
      <button className={buttonRegular}>?</button>
    </form>
  );
};

export default FilterForm;
