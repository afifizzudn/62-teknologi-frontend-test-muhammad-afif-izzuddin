import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import { TbMapPinSearch } from "react-icons/tb";

const MenuWithSearchInput = ({onChange, getNearbyLocation}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
    //   if (!inputValue) {
    //     setInputValue("Kuala Lumpur");
    //   } else {
    //     onChange(inputValue);
    //   }
    onChange(inputValue);
    }, 1000);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue, 1000]);

  const handleInput = (value) => {
    setInputValue(value);
  };

  const handleNearbyLocation = () => {
    setInputValue(" ")
    getNearbyLocation()
  }

  return (
    <Menu
      dismiss={{
        itemPress: false,
      }}>
      <MenuHandler>
        <Button variant='outlined' className='flex items-center gap-3'>
          Search
          <TbMapPinSearch />
        </Button>
      </MenuHandler>
      <MenuList>
        <Input
          onChange={(e) => handleInput(e.target.value)}
          value={inputValue}
          label='Location'
          containerProps={{
            className: "mb-4",
          }}
        />
        <MenuItem onClick={()=> handleNearbyLocation()} className='flex flex-row w-full justify-between'>
          Get Current location <FaLocationDot />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuWithSearchInput;
