// import the classes
import Motorbike from "../classes/Motorbike.js";

// define the interface
interface Wheelie {

    // wheelie method takes a motorbike as an argument
    wheelie(vehicle: Motorbike): void;
}

// export the interface
export default Wheelie;
