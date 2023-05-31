let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    val=e.target.innerHTML;
    if( val== '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(val == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(val == '+/-'){
        if(string[0]=='-'){
            string = string.slice(1)
        }
        else{
        string = '-'+string
        }
        document.querySelector('input').value = string;
    }
    else if(val == 'x²'){
        string = eval(string)**2;
        document.querySelector('input').value = string;
    }
    else if(val == '√'){
        string = Math.sqrt(eval(string));
        document.querySelector('input').value = string;
    }
    else if(val == 'ln'){
        string = Math.log(eval(string))/Math.log(Math.exp(1));
        document.querySelector('input').value = string;
    }
    else if(val == 'e'){
        string = Math.exp(1);
        document.querySelector('input').value = string;
    }
    else if(val == 'log'){
        string = Math.log(eval(string));
        document.querySelector('input').value = string;
    }
    else if(val == 'sin'){
        string = Math.sin(eval(string));
        document.querySelector('input').value = string;
    }
    else if(val == 'cos'){
        string = Math.cos(eval(string));
        document.querySelector('input').value = string;
    }
    else if(val == 'tan'){
        string = Math.tan(eval(string));
        document.querySelector('input').value = string;
    }
    else if(val == 'Inv'){
        string = 1/eval(string);
        document.querySelector('input').value = string;
    }
    else if(val == 'EXP'){
        string = Math.exp(eval(string));
        document.querySelector('input').value = string;
    }
    else if(val == 'Del'){
        string = string.slice(0,-1);
        document.querySelector('input').value = string;
    }
    else if(val == 'xⁿ'){
        string = eval(string)**2;
        document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
