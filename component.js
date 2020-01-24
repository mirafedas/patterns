// Компоненти - це частини системи, які можна повторно використовувати. У них не можна змінювати нічого "ззовні", але можна в них передавати окреслені параметри. У компоненті можуть бути внутрішні методи і стан. Компонент не повинен мутувати свої вхідні дані (як чиста функція), але залежно від свого стану від може змінювати вихідні дані.

// Наприклад, функціональний компонент в Реакті:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Наприклад, "розумний" компонент у Реакті (такий, у якого є внутрішній стан):
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
