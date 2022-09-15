import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import {useQuery} from 'react-query';
import axios from "axios";

const fetchData = () => {
    return axios.get('http://localhost:4000/games')
}

function RenderRow(props) {
  const { index, style } = props;
  const {data} = useQuery('games-titles',fetchData,{
    select : (data) => {
        return data?.data.map(game => game.title)
    }
  })

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        {data?.map((title,index) => <ListItemText key={index} primary={title} />)}
      </ListItemButton>
    </ListItem>
  );
}

const CustomList = ({open}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 400,
          maxWidth: 360,
          bgcolor: "background.paper",
          display:open ? 'unset' : 'none'
        }}
      >
        <FixedSizeList
          height={400}
          width={360}
          itemSize={190}
          itemCount={1}
          overscanCount={5}
        >
          {RenderRow}
        </FixedSizeList>
      </Box>
    </>
  );
};

export default CustomList;
