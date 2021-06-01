import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    }

    this.addLike = this.addLike.bind(this);

  }

  addLike() {

    // https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous

    // this.setState({likes: this.state.likes + 1}); // WRONG see link above

    // this.setState(function(state, props) {
    //   this.setState({ likes: this.state.likes + 1 });
    // });

    this.setState((state, props) => this.setState({ likes: this.state.likes + 1 }));
  }

  render() {
    return (
      <button onClick={this.addLike}>{ this.state.likes } { this.state.likes === 1 ? 'like' : 'likes' }</button>

    );
  }
}

// function App() {
//   return (
//     <button>0 likes</button>
//   );
// }

export default App;
