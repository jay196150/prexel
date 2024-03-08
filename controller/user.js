const User = require("../models/user.js");

exports.getAllUser = async( req, res ) => {
    
    try{
        const data = await  User.find({});

        if( data.length === 0 ){
            res.status( 200 ).end();
        }
        else{
            res.status( 201 ).json( { data : data } );
        }
    }catch(error){
        res.status(400).json( { error : error} );    }

}

exports.getUserById = async( req, res ) => {
    
    try{
        
        const id = req.params;
        const data = await  User.findById( {id} );

        if( !data ){
            res.status( 200 ).end();
        }
        else{
            res.status( 201 ).json( { data : data } );
        }
    }catch(error){
        res.status(400).json( { error : error} );    }

}


exports.createUser = async( req, res ) => {
    
    try{
        
        const { name , role  } =  req.body;

        console.log("user create");

        const present = await  User.findOne( {name} );

        if( present ){
            res.status(204).json({ data : "user already exits" });
            return ;
        }

        const newUser = new User({
            name,
            role
        });

        await newUser.save();

        const newData = await User.findOne( { name : name } );
        
        if( newData ){
            return res.status(200).json( { data : newData} );
        }else{
            res.status(400).json( { data : "data not found" } );
        }

    }catch(error){
        res.status(400).json( { error : error} );    }

}