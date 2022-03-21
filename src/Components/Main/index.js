import { Component } from "react";
import iconDelete from "../../../src/pngegg.png"
import * as S from "./styles"

class Main extends Component {
  state = {
    text: "",
    list: [],
  };
  handleChange = (eve) => {
    this.setState({
      text: eve.target.value,
    });
  };
  handleClick = () => {
    const { text, list } = this.state;
    this.setState({
      list: list.concat(text),
    });
    this.setState({
      text: "",
    });
  };
  remove = (idx) => {
    console.log(idx);
    this.setState({
      list: this.state.list.filter((id, index) => index !== idx),
    });
  };

  render() {
    return (
      <S.Container>
        <S.Title>MY TO-DO LIST</S.Title>
        <S.Boxing>
        <input type="text" placeholder="I have to..." value={this.state.text} onChange={this.handleChange}></input>
        <S.Add onClick={this.handleClick}>Add</S.Add>
        </S.Boxing>
        {this.state.list.map((item, index) => (
          <S.BoxList key={index}>
            <p>{item}</p>
            <S.Delete onClick={() => this.remove(index)}><img src={iconDelete} alt="lixeira"/></S.Delete>
          </S.BoxList>
        ))}
      </S.Container>
    );
  }
}

export default Main;