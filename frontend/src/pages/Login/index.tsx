import { Group } from "@mantine/core";
import Inventory from "../../components/Inventory";
import Cashier from "../../components/cashier"
import backgroundimg from "../../assets/backgroundimg.jpg"
import { forwardRef } from "react";

const ManageHardware = forwardRef<HTMLInputElement>((props,ref) => {

  return (
    <div style={{ height: "100vh" , backgroundImage:`url(${backgroundimg})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'  }} ref={ref}>
      <Group position="center"  spacing={100}  >
          <Inventory />
  
      </Group>
    </div>
  );
});

export default ManageHardware;
