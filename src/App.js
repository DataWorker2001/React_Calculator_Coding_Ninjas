import './styles.css';
import React, {useState} from 'react';

function Header()
{
  return (
    <header>
      <h2>Welcome All! Just try out this Simple Arithmetic <h1>CALCULATOR</h1></h2>
      <p>DEVELOPER:- ARPAN CHOUDHURY (BCREC) (WEBDEV|DS|ML)</p>
      <div>Use C button after using '=' </div>
      <div>## Here % means as a fraction (part) of 100 i.e. num + 50% returns num + 50/100 = num + 0.5 and not num + 0.5*num</div>
      <div>##If you all want to do that you all can multiply num seperately by 0.5 For Example.</div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>It's hoped, all operations are streamlined.</p>
      <p>
        <ul>
          <li>1)Here % will give as a fraction of 100 i.e. number/100</li>
          <li>2)Use the C button to clear if you get any error</li>
      </ul>
      </p>
    </footer>
  );
}

function App() {
  const [input, setInput] = useState("");
  const [previousResult, setPreviousResult] = useState(null);
  function handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case "=":
        try {
          let result = eval(input.replace(/%/g, "/100"));
          if (result === Infinity || result === -Infinity) {
            setInput("Error: Division by zero");
          } else {
            setInput(parseFloat(result.toFixed(10)));
          }
        } catch (error) {
          setInput("Error");
        }
        break;
      // case "%":
      //   setInput(eval(input)/100);
      //   break;
      case "DEL":
        setInput(input.slice(0,-1));
        break;
      case "C":
        setInput("");
        break;
      case ".":
        const operators2 = ["+", "-", "*", "/"];
        const lastOperator2 = operators2.reduce((acc, operator) => {
          const lastIndex = input.lastIndexOf(operator);
          if (lastIndex > acc) {
            return lastIndex;
          } else {
            return acc;
          }
        }, -1);
        if (input.slice(lastOperator2 + 1).indexOf(".") === -1) {
          setInput(input + ".");
        }
        break;
      default:
        if (input === '0' && /\d/.test(value) && !/[\/*\-+]/.test(value)) {
          setInput(value);
        }
        else if(input==='0' && (value==='*0.01'||value==='*-1'))
          {
            setInput(0);
          }  
        else if (/^0$/.test(input) && /\d/.test(value)) {
          setInput(input.slice(0, -1) + value);
        }
        else {
          setInput(input + value);
        }
        break;
    }
  }
  function evaluateExpression() {
    // Evaluate the expression
    const result = eval(input);
  
    // Store the result
    setPreviousResult(result);
  
    // Return the result
    return result;
  }
  
     
  return (
    <div className = "web">
    <Header/>
    <div className="calculator-grid">
      <div className  = "output">
        {/* <div className = "previous-operand"></div> */}
        {/* <div className = "current-operand">{currentOperand}</div> */}
        {input}
      </div>
      <button className = "btn" onClick={handleClick} value='C'>C</button>
      <button className = "btn" onClick={handleClick} value='*-1'>+/-</button>
      <button className = "btn" onClick={handleClick} value='*0.01'>%</button>
      <button className = "btn-orange" onClick={handleClick} value='/'>÷</button>
      <button className = "btn" onClick={handleClick} value='7'>7</button>
      <button className = "btn" onClick={handleClick} value='8'>8</button>
      <button className = "btn" onClick={handleClick} value='9'>9</button>
      <button className = "btn-orange" onClick={handleClick} value='*'>x</button>
      <button className = "btn" onClick={handleClick} value='4'>4</button>
      <button className = "btn" onClick={handleClick} value='5'>5</button>
      <button className = "btn" onClick={handleClick} value='6'>6</button>
      <button className = "btn-orange"  onClick={handleClick} value='-'>-</button>
      <button className = "btn" onClick={handleClick} value='1'>1</button>
      <button className = "btn" onClick={handleClick} value='2'>2</button>
      <button className = "btn" onClick={handleClick} value='3'>3</button>
      <button className = "btn-orange"  onClick={handleClick} value='+'>+</button>
      {/* <button className = "btn" onClick={handleClick} value='DEL'>DEL</button> */}
      <button className = "span-two" onClick={handleClick} value='0'>0</button>
      <button className = "btn" onClick={handleClick} value='.'>.</button>
      <button className = "btn-orange" onClick={handleClick} value='='>=</button>
    </div>
    <Footer/>
    </div>
  );
};


export default App;
