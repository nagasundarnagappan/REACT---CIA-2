import React, { useState } from "react";
import Select from 'react-select';
import Box from '@mui/material/Box';



const Dropdown = () => {
    var options = [
        {
        label: 'Lime',
        value: 'lime'
        }, 
        {
        label: 'Lavender',
        value: 'lavender'
        }, 
        {
        label: 'Crimson',
        value: 'crimson'
        },
        {
        label: 'Darkblue',
        value: 'darkblue'
        },
        {
        label: 'Teal',
        value: 'teal'
        },
        {
        label: 'Rebecca Purple',
        value: 'rebecca purple'
        },
        {
        label: 'Ghost White',
        value: 'ghostwhite'
        },
        {
        label: 'Aqua Marine', 
        value: 'aquamarine'
        }, 
        {
        label: 'Alice Blue',
        value: 'aliceblue'
        }
    ]


    var [color, setcolor] = useState("");

    const eventChange = (event) => {
        setcolor(event.label);
    }

    return (
        <div>
        <div class="hed">✨  Choose a Color  ✨</div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <center>
            <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: color,
            }}
          ><br/><br/><br/><br/><br/><Select options={options} onChange={eventChange} sx={{width : 50}}></Select>
          <br/>
          <br/>
          <br/>
          </Box>
            </center>
        </div>
    )
}

export default Dropdown;
