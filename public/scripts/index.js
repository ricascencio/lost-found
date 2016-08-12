var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hola!, aqui puedes reportar objetos que hayas perdido o encontrado. En una de esas encuentras lo que perdiste :)
    	<p>Que quieres hacer?</p>
    	<OptionsBox />
      </div>
    );
  }
});


var OptionsBox = React.createClass({
  setTypeAction: function(typeAction){
		this.props.setTypeAction(typeAction);
	},
  render: function() {
    return (
      <div className="optionsBox">
      	<ButtonAction text="Perdi"/>&nbsp;
        <ButtonAction text="Encontre"/>&nbsp;
        <ButtonAction text="Buscar"/>
      </div>
    );
  }
});

var ButtonAction = React.createClass({
	handleClick: function(e){
		const typeAction = e.target.value;
		ReactDOM.render(<ObjectForm typeAction={typeAction}/>, document.getElementById('actionForm'));
	},
	render: function(){
		return (
			<input type="submit" value={this.props.text} onClick={this.handleClick}/>
		)
	}
});

var ObjectElement = React.createClass({
	render: function(){
		return (
			<div className="object">
				<h3>{this.props.name}</h3>
				<p>
					<DetailsObject/>
				</p>
			</div>
		)
	}
});

// var DetailsObject = React.createClass({
// 	render: function(){
// 		return (

// 		)
// 	}
// )};

var ObjectForm = React.createClass({
	getInitialState: function(){
		return {nombre:'', descripcion:'', ubicacion:'', objeto:'', owner:'',marca:'',color:''};
	},
	handleNombreChange: function(e){
		this.state.nombre = e.target.value;
	},
	handleDescripcionChange: function(e){
		this.state.descripcion = e.target.value;
	},
	handleUbicacionChange: function(e){
		this.state.ubicacion = e.target.value;
	},
	handleObjetoChange: function(e){
		this.state.objeto = e.target.value;
	},
	hanldeOwnerChange: function(e){
		this.state.owner = e.target.value;
	},
	handleMarcaChange: function(e){
		this.state.marca = e.target.value;
	},
	handleColorChange: function(e){
		this.state.color = e.target.value;
	},
	handleAgregarObjeto: function(e){
		var item = {
					objeto:this.state.objeto
				}

		if(this.state.owner.split() !== ''){
			console.log(this.state.owner);
			item.concat();
		}
		console.log(item);
	},
	handleSubmit: function(e){
		e.preventDefault();
		var item = {
					nombre:this.state.nombre,
					descripcion:this.state.descripcion,
					ubicacion:this.state.ubicacion

				};		
		console.log(item);
	},
	render: function(){
		return (			
			<div>
				<h1>{this.props.typeAction}</h1>
				<form className="objectForm">
					<div className="rowDiv">
						<div className="rowDiv">
							<div className="leftDiv">Objeto <input type="text" placeholder="nombre" onChange={this.handleNombreChange}/></div>
							<div className="rightDiv">Descripcion <input type="text" placeholder="descripcion"  onChange={this.handleDescripcionChange}/></div>
						</div>
						<div className="rowDiv">
							<div>Ubicacion <input type="text" placeholder="donde lo perdiste/encontraste" size="40"  onChange={this.handleUbicacionChange}/></div>
						</div>
					</div>					
					<p>
						<h3>Dinos que contiene</h3>
					</p>
					<div className="objectsDiv">						
						<div className="rowDiv">
							Objeto <input type="text" placeholder="objeto"  onChange={this.handleObjetoChange}/>
						</div>
						<h3>Puedes agregar las siguientes propiedades</h3>
						<div className="rowDiv">
							<div>
								Nombre/propietario <input type="text" placeholder="nombre" size="40" onChange={this.hanldeOwnerChange}/>&nbsp;														
								<input type="button" value="+"/>
								<input type="button" value="-" disabled="true"/>
							</div>
						</div>
						<div className="rowDiv">
							<div className="leftDiv">
								Marca <input type="text" placeholder="marca" onChange={this.handleMarcaChange}/>&nbsp;
								<input type="button" value="+"/>
								<input type="button" value="-" disabled="true"/>
							</div>
							<div className="rightDiv">
								Color <input type="text" placeholder="color"  onChange={this.handleColorChange}/>&nbsp;
								<input type="button" value="+"/>
								<input type="button" value="-" disabled="true"/>
							</div>							
						</div>
						<input type="button" value="Agregar objeto" onClick={this.handleAgregarObjeto}/>
					</div>
					<input type="button" value="Registrar" onClick={this.handleSubmit}/>
				</form>
			</div>
		);
	}
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);