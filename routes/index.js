var SU = require('../models/producto');

module.exports = function(app){
	app.get('/', function(req,res){
		SU.lista(function(e, prods){
			res.render('index', {
				title: 'Express',
				error: e,
				productos: prods
			});
		});
	});

	app.post('/', function(req,res){
		SU.lista(function(e, prods){
			res.render('index', {
				title: 'Express',
				error: '',
				productos: prods
			});
		});
	});

	app.get('/create',function(req, res){
		res.render('create',{title:'express'});
	});

	app.post('/create', function(req,res){
		SU.new({
			nombre: req.param('nombre'),
			descripcion: req.param('descripcion'),
			precio: req.param('precio')
		});
		res.redirect('/');
	});

	app.get('/edit', function(req, res){
		/*res.render('edit',{
			title: 'Express',
			id: req.param('id')
		});*/
		SU.listarPorId({ id: req.param('id') }, function(e, prod){
			res.render('edit',{
				title: 'Express',
				id: req.param('id'),
				producto: prod
			});
		});
	});

	app.post('/edit', function(req, res){
		SU.editar({
			nombre: req.param('nombre'),
			descripcion: req.param('descripcion'),
			precio: req.param('precio'),
			id: req.param('id')
		}, function(o){
			if(o){
				res.redirect('/');
			}else{
				resp.send('error al actualizar', 400);
			}
		});
	});

}