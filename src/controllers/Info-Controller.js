import { StatusCodes } from "http-status-codes";

const info = (req,res)=> {
    res.status(StatusCodes.OK).json(
        {
            success : 'true',
            message : 'Kya haal hai'
        }
    )
};

export{
    info
};