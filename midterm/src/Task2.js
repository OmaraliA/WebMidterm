import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Task2 extends Component {
  constructor(props) {
    super(props);

  this.state = {
     isToggleOn: true,
     items:[{'name':"Milk",'price':"300"},
            {'name':"Bread",'price':"100"},
            {'name':"Ice-cream",'price':"150"},
            {'name':"Candy",'price':"200"},
     ],
     total:'0'
  };

  this._handleClick = this._handleClick.bind(this);
}

  _handleClick(value) {
   
    var el = value.target;

    let n,e;
    this.state.items.map((item,index) => {

                        if(value==index){
                            n=item.name;
                            e=item.price;                
                       }
  });
   this.setState({
          total:e,
   }
  );
 
}


  render() {
    return (
      <div>
         <ul className="items">
         <h1>Products</h1>
                        { this.state.items.map((item,index) =>
                          <li key={index} className="chip" 
                            name={item.name}
                            price={item.price}
                            onClick ={this._handleClick.bind(this,index)}
                            >     
                             <div id="logo" className="names">                    
                              {item.name} - {item.price}                  
                        </div>
                              </li>
                       
                        )}

                    </ul>
                      Total: {this.state.total}
                    </div>
    );
  }
}

export default Task2;
