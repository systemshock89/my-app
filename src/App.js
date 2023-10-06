// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

// function WhoAmI (props) {
  
// function WhoAmI ({name, surname, link}) {
//   return (
//     <div>
//       <h1>My name is {name()}, surname - {surname}</h1>
//       <a href="{link}">My profile</a>
//     </div>
//   )
// }

// классовый компонент
class WhoAmI extends Component {
  // для передачи в экземпляр класса передать пропасы, используем конструктор (эта возможность приходит из react Component)
  constructor(props){
    super(props);

    // состояние - объект, кот-й описывает динамические вещи, кот-е будут в объекте
    this.state = {
      years: 27,
      text: '+++'
    }
  }
  // если в конструкторе больше ничего нет (кроме super(props); ), то его можно удалить


  // метод
  nextYear = () => {
    // изменяем состояние:

    // this.setState({
      // так правильно. Но лучше передадим callback ф-ю, чтобы счетчик не сбился
      // years: this.state.years + 1 

      // years: ++this.state.years и так нельзя, тк тогда мы поменяем предыдущее состояние
    // })

    // this.state.years++; и так не правильно изменять состояние!

    // тк у нас состояние счетчика зависит от предыдущиго его знач-я,
    // передадим callback ф-ю, чтобы счетчик не сбился
    // а если нам не важно предыдущее знач-е (напр вводим текст в input), то просто передадим объект, а не ф-ю
    this.setState(state => {
      years: state.years + 1 // уже без this.
    }) // сокращенние написание: здесь оборачиваем (), заменяя слово return
  }

  render(){
    const {name, surname, link} = this.props;

    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name='Jonh' surname="Smith" link="facebook.com"/>
      <WhoAmI name='Alex' surname="Smith" link="vk.com"/>
      
      {/* <WhoAmI name={() => {return 'Jonh1'}} surname="Smith" link="facebook.com"/> */}
      {/* <WhoAmI name={{firstName: 'Jonh'}} surname="Smith" link="facebook.com"/> */}
      {/* <WhoAmI name="Jonh" surname="Smith" link="facebook.com"/> */}
    </div>
  );
}

export default App;
