
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box } from '@mui/system';


const Todo = (props) => {

const [hovered, setHovered] = useState(false)

const onEnter = () => {
    setHovered(prevHovered => !prevHovered)
}

const onLeave = () => {
    setHovered(prevHovered => !prevHovered)
}

const handleClick = () => {
    setHovered(prevHovered => !prevHovered)
}


const style = {
    textDecoration: hovered ? "line-through" : "none",
    cursor:"pointer"
}

const trashStyle = {
    opacity: hovered ? "1" : "0",
    width: "20px",
    position: "relative",
    
}

    return ( 
        <Box  sx={{ mt:1, display: 'flex', justifyContent: 'space-between'}}>
            <Typography
            style={style}
            onClick = {handleClick}
            onMouseEnter = {onEnter}
            onMouseLeave = {onLeave}
            variant="p"
            color= {hovered ? "success.main" : "primary"}
            
            >
            {props.todoText}
            </Typography>

            <DeleteOutlineOutlinedIcon
                color='warning'
                style={trashStyle}
                onClick={props.handleDelete}
            />
        </Box>
     );
}
 
export default Todo;