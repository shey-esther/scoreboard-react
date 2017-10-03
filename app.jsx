
class Model  {
  constructor ()  {
    this.players = [
      {
        name: "Jim Hoskins",
        score: 31,
        id: 1,
      },
      {
        name: "Andree Hoskins",
        score: 35,
        id: 2,
      },
      {
        name: "Alena Hoskins",
        score: 42,
        id: 3,
      },
    ];
    this.callback = null;
  }
  subscribe(render) {
    this.callback = render;
  }
  notify () {
    this.callback();
  }
  puntosTotale () {
    return model.players.map((e) => e.score).reduce((a, b) => { return a + b });
    // console.log(puntosTotale);
  }
  intergrantes () {
   return model.players.length;
  }
  decremento (variable) {
    // return e ++;
    result = variable++
  }
  incremento () {
    
  }

}


const Header = (props) => {
  // const puntosTotale = props.players.map((e) => e.score).reduce((a, b) => { return a + b });
  return (
    <div className="header">
      <div className="stats">
        <table>
          <tbody>
            <tr><td>PLAYERS:</td>{model.intergrantes()}</tr>
            <tr><td>TOTAL:</td>{model.puntosTotale()}</tr>
          </tbody>
        </table>
      </div>
      <div className="stopwatch">
        <h2>atopht</h2>
        <h1 className="stopwatch-time">0</h1>
        <button>B</button>
        <button>m</button>
      </div>
    </div>
  )
}

const PlayerList = ({model}) => {
  return (
    <div>{
      model.players.map((dato, index) => {
        return (
          <div className="player">
            <div className="player-name">{dato.name}</div>
            <div className="player-score counter">
            <button  onClick= { decremento() } className="counter-action decrement btn">-</button>
            <p className="counter-score">{dato.score}</p>
            <button  onClick= { incremento() } className="counter-action increment btn">+</button>         
            </div>
        </div>
        )
      })
    }
    </div>
  )
}

let PlayerForm = React.createClass({
  render: function () {
    return (
        <div className="add-player-form">
          <form>
          <input type="text"/>
          <input type="submit"/>
          </form>
        </div>
    )
  }
})

const Application = ({ title, model }) => {
  return (
    <div className="scoreboard">
      <Header model={model} />
      <PlayerList model={model} />
      <PlayerForm />
    </div>
  );
}

let model = new Model();
let counter = 1;

 let render = () => {
  ReactDOM.render(<Application title="Scoreboard" model={model} />,
  document.getElementById('container')
  );
 };
 model.subscribe(render);
 render();
