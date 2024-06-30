import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Button({ IconComponent, type, color, routeURL }) {
    const navigate = useNavigate()

    const clickable = () => {
        if (routeURL) {
            navigate(routeURL)
        }
    }

    return (
        <IconButton 
            type={type} 
            onClick={clickable} 
            size="small">
            <IconComponent fontSize="inherit" style={{ color: color }}/>
        </IconButton>
    )
}