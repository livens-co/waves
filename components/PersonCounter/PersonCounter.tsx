"use client"

import { useGlobalContext } from "@/app/context/store";

import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Tooltip from "@mui/material/Tooltip";

import './style.scss'

const PersonCounter = () => {
    const { numberOfPeople, setNumberOfPeople } = useGlobalContext();

    const onMinus = () => {
        if (numberOfPeople > 1) {
          setNumberOfPeople(numberOfPeople - 1);
        }
      };
    
      const onPlus = () => {
        if (numberOfPeople <= 13) {
          setNumberOfPeople(numberOfPeople + 1);
        } else {
          setNumberOfPeople(numberOfPeople);
        }
      };

  return (
    <div className="counterWrapper">
        <h4>Number of people:</h4>
        <div className="counter">
          <button onClick={onMinus}>
            <RemoveRoundedIcon />
          </button>
          <Tooltip title="Max. 14 people">
            <h3>{numberOfPeople}</h3>
          </Tooltip>
          <button onClick={onPlus}>
            <AddRoundedIcon />
          </button>
        </div>
      </div>
  )
}

export default PersonCounter