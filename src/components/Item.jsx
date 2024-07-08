import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "./Button";


export default function Item({ info, complementInfo, label, IconComponent, routeURL }) {
  const navigate = useNavigate()

  const onClick = () => {
    if (routeURL) {
        navigate(routeURL, { 
          state: {
            info: info,
            complementInfo: complementInfo
          }
        }
      )
    }
  }

  return (
    <div className="item-name">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <IconComponent/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={label} />
        <Button
          IconComponent={NavigateNextIcon} 
          type="button"
          color="white"
          onClick={onClick}
        /> 
      </ListItem>
    </div>
  )

}