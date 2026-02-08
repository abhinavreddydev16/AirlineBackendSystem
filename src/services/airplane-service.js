import { AirplaneRepository } from "../repositories.js";

const airplanerespotiory = new AirplaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airplanerespotiory.create(data);
        return airplane ;
    } catch (error) {
        throw error;
    }

}


export {createAirplane};
