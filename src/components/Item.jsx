import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "./Button";


export default function Item({ info, label, IconComponent, routeURL }) {

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
          routeURL={routeURL}
          info={info}
        /> 
      </ListItem>
    </div>
  )

}