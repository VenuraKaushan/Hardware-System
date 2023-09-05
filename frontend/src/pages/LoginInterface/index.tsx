import InventoryLogin from "../../components/InventoryLogin";
import backgroundImage from '../../assets/backgroundimg.jpg';
import {  createStyles} from '@mantine/core';

const useStyles = createStyles((theme) =>({
    background : {
      height : "100vh",
      backgroundImage : `url(${backgroundImage})`,
      backgroundRepeat : "no-repeat",
      backgroundPosition : "center",
      backgroundSize : "cover" ,
      display: "flex",
      justifyContent: "center",
      alignItems: "center", 
    }
  }));
const LoginInterface = () =>{

      // import styles
  const {classes} = useStyles();

  
    return(
        <div className={classes.background}>
            <div>
                <InventoryLogin/>
            </div>
        </div>
    )
}

export default LoginInterface;