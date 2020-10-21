import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// function Sort(){
//   let number = numbers.sort();
//   alertify.success(number);
// }

// function SortNumber(){
// let number1 = numbers = numbers.sort(function(a, b){return a - b});
// alertify.success(number1);

// }

export default class App extends Component {
  constructor(props) {
    super(props);
    this.Sort = this.Sort.bind(this);
    this.SortNumber = this.SortNumber.bind(this);
  }

  //numbers adında boş diziyi state altında boş bekletiyoruz
  state = {
    numbers: [],
  };
  //setState i kullanacaksan render işleminin tekrarı için componentDidmount
  componentDidMount() {
    this.getNumbers();
  }
  //Dizinin içini dolduruyoruz (state set state ten anlayabilirsin)
  getNumbers = () => {
    this.setState({ numbers: [14, 66, 5, 52, 87, 75, 9, 65, 46, 12, 3, 11, 77, 19, 54] });
  };

  Sort = () => {
   const numbera = this.state.numbers.sort();
   //Burada alfabetik sıraya göre sıraladığımız diziyi state deki diziye aktarıyoruz
   this.setState({numbers: numbera})
    // console.log(numbera);
  };

  SortNumber = () => {
    const numbersn = this.state.numbers.sort(function (a, b) {
      return a - b;
    });
    //burada sayısal değerine göre sıralayıp state deki diziyi güncelliyoruz
    this.setState({numbers: numbersn});
    // console.log(
    //   numbersn );
    //console.log ile F12 den açtığın console da önizleme alabilirsin test amaçlı eklendi
  };

  render() {
    return (
      <div>
        {" "}
        <Container className="themed-container" fluid="md">
          
          <Row>
            <Col sm={{ size: "auto", offset: 1 }}>
              <Button
                onClick={() => this.Sort()}
                className="my-4"
                color="primary"
                type="button"
              >
                Alfabetik Sıralama
              </Button>
            </Col>
            <Col sm={{ size: "auto", offset: 1 }}>
              <Button
                onClick={() => this.SortNumber()}
                className="my-4"
                color="primary"
                type="button"
              >
                Numerik Sıralama
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 1 }}>
            [14, 66, 5, 52, 87, 75, 9, 65, 46, 12, 3, 11, 77, 19, 54] 
              {this.state.numbers.map((item, i) => (
                <li key={i}>{this.state.numbers[i]}</li>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
