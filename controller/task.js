const Task = require("../models/task.js");

exports.getAllTask = async( req, res ) => {

    try{

        const data = await Task.find( {} );

        if( data.length === 0 ){
            res.status(204).end();
        }
        else{
            res.status( 201 ).json( { data : data } );
        }

    }
    catch( error ){
        res.status(500).json( { error : error } );
    }
}

exports.updateStatus = async( req,res ) => {
    try{
        
        const id = req.params;

        const {status} = req.body;

        const data = await Task.findById( id );

        if( data ){
            const updateData = await Task.findByIdAndUpdate( id , { status : status } );
            return res.status( 200 ).json( {data : updateData } );
        }

    }
    catch( error ){
        res.status(500).json( { error : error } );
    }
}
