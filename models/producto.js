var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Supermercado', function(err){
	if(!err){
		console.log('yupi uuuuuu!!! estamos conectados a mongodb');
	}else{
		throw err;
	}
});

var SUPER = mongoose.model('Producto',{
	nombre: String,
	descripcion: String,
	precio: Number
});

module.exports = SUPER;

SUPER.new = function(newData){
	var nSuper = new SUPER({
		nombre: newData.nombre,
		descripcion: newData.descripcion,
		precio: newData.precio
	});

	nSuper.save();
}

SUPER.lista = function(callback){
	SUPER.find(function(err, res){
		if(err){
			callback(err);
		}else{
			callback(null,res);
		}
	});
}

SUPER.getObjectId = function(id){
	return SUPER.db.bson_serializer.ObjectID.createFromHexString(id);
	//return console.log(id);
}

SUPER.editar = function(newData, callback){
	SUPER.findOne({_id: this.getObjectId(newData.id)}, function(e,o){
		o.nombre = newData.nombre;
		o.descripcion = newData.descripcion;
		o.precio = newData.precio;
		SUPER.save(o);
		callback(o);
	});
}

SUPER.listarPorId = function(newData, callback){
	SUPER.findOne({_id: newData.id},
		function(err, res){
			if(err){
				console.log('hola: ' + err);
				callback(err);
			}else{
				callback(null, res);
			}
		});
}