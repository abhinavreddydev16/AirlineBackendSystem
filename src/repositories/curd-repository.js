import { Logger } from "winston";
import { logger } from "../config";
import { where } from "sequelize";

class Crudrepository  {
    constructor(model){
        this.model=model;
    }

    async create(date){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in crud repo : create');
            throw error;           
        }
    }


    async destroy(data){
        try {
              const response = await this.model.destroy(
                {
                    where: {
                        id : data
                    }
                }
              );
              return response;
        } catch (error) {
            logger.error('Something went wrong in Crud Repo : destroy');
            throw error;
        }
    }

        async get(data){
        try {
              const response = await this.model.findByPk(data);
              return response;
        } catch (error) {
            logger.error('Something went wrong in Crud Repo : get');
            throw error;
        }
    }

        async getAll(data){
        try {
              const response = await this.model.findAll();
              return response;
        } catch (error) {
            logger.error('Something went wrong in Crud Repo : Findall');
            throw error;
        }
    }

    
    async update(data,id){
        try {
              const response = await this.model.update(data , {
                where : {
                    id : id
                }
              });
              return response;
        } catch (error) {
            logger.error('Something went wrong in Crud Repo : Update');
            throw error;
        }
    }

}

export default Crudrepository;