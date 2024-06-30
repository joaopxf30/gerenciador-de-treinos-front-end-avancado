import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Button({ IconComponent, type, color, routeURL, info }) {
    const navigate = useNavigate()

    const onClick = () => {
        if (routeURL) {
            navigate(routeURL, {state: info})
        }
    }

    return (
        <IconButton 
            type={type} 
            onClick={onClick} 
            size="small">
            <IconComponent fontSize="inherit" style={{ color: color }}/>
        </IconButton>
    )
}