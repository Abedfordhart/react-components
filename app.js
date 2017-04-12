//TODO
class GroceryListItem extends React.Component {
 constructor(props){
  super(props);
  this.state = {
    done: false
  };
 }

 onListItemClick(){
  this.setState({
    done: !this.state.done
  })
 }

 render(){
   
   var style = {
    textDecoration: this.state.done ? 'line-through' : 'none'
   };

  return (
     <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
  );
 }
}

var GroceryList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <GroceryListItem todo={todo}/>
      )}
  </ul>
);

var App = () => (
  <div>
    <h2> Grocery List </h2>
      <GroceryList todos = {['milk', 'cookies', 'wine']}/>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));



 // <div>
 //     <h2>Grocery List</h2>
 //     <GroceryListItem todos = {['milk', 'cookies', 'wine']}/>
 //    </div>