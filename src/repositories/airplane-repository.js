import Crudrepository from "./curd-repository";
import airplane from "../models/airplane";

class AirplaneRepository extends Crudrepository {
   constructor(){
       super(airplane);
   }
}

export default AirplaneRepository;