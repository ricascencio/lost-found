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
      	<ButtonAction text="Perdi"/>
        <ButtonAction text="Encontre"/>
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

var ObjectForm = React.createClass({
	render: function(){
		return (
			<div>
				<h1>{this.props.typeAction}</h1>
				<form className="objectForm">
					<div>
						<p>
							<div >Objeto <input type="text" placeholder="nombre"/></div>
							<div >Descripcion <input type="text" placeholder="descripcion"/></div>
						</p>
						<p>
							<div>Ubicacion <input type="text" placeholder="donde lo perdiste/encontraste"/></div>
						</p>
						<p>
						<label>Dinos que contiene</label>
						</p>
						<p>
							<div >
								Objeto <input type="text" placeholder="objeto"/>
								Marca <input type="text" placeholder="marca"/>
								<input type="button" value="+"/>
							</div><br/>
							<div >
								Color <input type="text" placeholder="color"/>
								<input type="button" value="+"/>
							</div>
						</p>
					</div>
				</form>
			</div>
		);
	}
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);