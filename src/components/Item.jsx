import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "./Button";


export default function Item({ labelText, IconComponent, routeURL }) {
    
  return (
    <div className="item-name">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <IconComponent/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={labelText} />
        <Button
          IconComponent={NavigateNextIcon} 
          type="button"
          color="white"
          routeURL={`/esportista/${labelText}`}
        /> 
      </ListItem>
    </div>
  )

}