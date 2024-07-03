import { IconButton } from "@mui/material";

export default function Button({ IconComponent, type, onClick, color }) {

    return (
        <IconButton 
            type={type} 
            onClick={onClick} 
            size="small">
            <IconComponent fontSize="inherit" style={{ color: color }}/>
        </IconButton>
    )

}