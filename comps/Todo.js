
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { borderBottom, Box, height } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const Todo = (props) => {

const [hovered, setHovered] = useState(false)
const [editable, setEditable] = useState(false)

const onEnter = () => {
    setHovered(prevHovered => !prevHovered)
}

const onLeave = () => {
    setHovered(prevHovered => !prevHovered)
}

const handleClick = () => {
    setHovered(prevHovered => !prevHovered)
}

const handleEdit = () => {
    setEditable(prevEditable => !prevEditable)
}

const style = {
    textDecoration: hovered && !editable ? "line-through" : "none",
    cursor: editable ? "text" : "pointer"
}

const iconDeleteButtonStyle = {
    display: hovered ? "inline-flex" : "none",
    marginLeft: "10px"
}

const iconEditButtonStyle = {
    display: hovered ? "inline-flex" : "none"
}

const trashStyle = {
    position: "absolute"
}

const editStyle = {
    position: "absolute"
}


    return ( 
        <Box   sx={{ my:1, display: 'flex', justifyContent: 'space-between'} } onMouseEnter = {onEnter} onMouseLeave = {onLeave}>
            <Typography
            style={style}
            onClick = {handleClick}
            variant="p"
            color= {hovered && !editable ? "success.main" : "primary"}
            direction="column"
            justifyContent="center"
            contenteditable = {editable ? "true" : "false"}
            >
            {props.todoText}
            </Typography>

            <Box>
                <IconButton style={iconEditButtonStyle} onClick={handleEdit}>
                    {editable ? <CheckIcon color='primary' style={editStyle} /> : <EditIcon color='primary' style={editStyle} />}
                </IconButton>
                <IconButton aria-label="delete" value={props.trashValue} onClick={props.handleDelete} style={iconDeleteButtonStyle}>
                <DeleteIcon color='warning' style={trashStyle} />
                </IconButton>
            </Box>

        </Box>
     );
}
 
export default Todo;