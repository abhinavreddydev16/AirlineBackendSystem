const info = (req,res)=> {
    res.json(
        {
            success : 'true',
            message : 'Kya haal hai'
        }
    )
};

export{
    info
};