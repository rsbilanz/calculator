import {useState} from 'react';

function App(){

  const [total,ctotal] = useState(0);
  const [totalcomp,ctotalcomp] = useState("");
  const [firstnum,cfirstnum] = useState("");
  //const [actionto,cactionto] = useState("");
  const [afterchange,cafterchange] = useState(false);
  const [lock,clock] = useState(false)
  const [ulit,culit] = useState("");

  const numplat = (e) =>{
    const clicknum = e.target.value;
    if(total === "+" || total === "-" || total === "*" || total === "/" || total=== "0" || afterchange === true || total === 0){
      ctotal(clicknum);
      clock(false);
      cafterchange(false);
      e.preventDefault();
    }else{
      if(total === 0){
        ctotal(parseFloat(clicknum));
        e.preventDefault();
      }else{
        ctotal(total.toString() + clicknum.toString());
        e.preventDefault();
      }

      //ctotal(total + "" + clicknum);
    }

  }
  const clearnum = (e) =>{
    ctotal(0);
    ctotalcomp("");
    cfirstnum("");
    //cactionto("");
    cafterchange(false);
    //const denom = ["+","-","X","/"];
    clock(false)
    culit("");
    e.preventDefault();
  }
  const action = (e) =>{
    const action = e.target.value;
    if(firstnum===""){
      if(action==="add"){
        ctotalcomp(total + " +");
        cfirstnum(total);
        clock(true);
        culit("+");
        //cactionto("add");
        //ctotal(0);
        e.preventDefault();
      }
      else if(action==="minus"){
        ctotalcomp(total + " -");
        cfirstnum(total);
        clock(true);
        culit("-");
        //cactionto("minus");
        //ctotal(0);
        e.preventDefault();
      }
      else if(action==="multiply"){
        ctotalcomp(total + " X");
        cfirstnum(total);
        clock(true);
        culit("X");
        //cactionto("multiply");
        //ctotal(0);
        e.preventDefault();
      }
      else if(action==="divide"){
        ctotalcomp(total + " /");
        cfirstnum(total);
        clock(true);
        culit("/");
        //cactionto("divide");
        //ctotal(0);
        e.preventDefault();
      }
      cafterchange(true);
    }else{
      //get the last string
      const laststring = totalcomp.charAt(totalcomp.length-1);
      //from here add
      if(laststring==="+"){
        if(lock === true && laststring === ulit){
          if(action === "add"){
            ctotalcomp(totalcomp.slice(0,-1) + " +");
            culit("+");
          }
          else if(action === "minus"){
            ctotalcomp(totalcomp.slice(0,-1) + " -");
            culit("-");
          }
          else if(action === "multiply"){
            ctotalcomp(totalcomp.slice(0,-1) + " X");
            culit("X");
          }
          else if(action === "divide"){
            ctotalcomp(totalcomp.slice(0,-1) + " /");
            culit("/");
          }


          e.preventDefault();
        }
        else{
          const totals = parseFloat(firstnum) + parseFloat(total);
          ctotal(totals);
          cfirstnum(totals);
          //add minus multiply divide
          if(action === "add"){
            ctotalcomp(totalcomp + " " + total + " +");
            culit("+");
          }
          else if(action === "minus"){
            ctotalcomp(totalcomp + " " + total + " -");
            culit("-");
          }
          else if(action === "multiply"){
            ctotalcomp(totalcomp + " " + total + " X");
            culit("X");
          }
          else if(action === "divide"){
            ctotalcomp(totalcomp + " " + total + " /");
            culit("/");
          }
          //end add minus multiply divide
          cafterchange(true);
          clock(true);
          e.preventDefault();
        }
      }
      //minus
      else if(laststring==="-"){
        if(lock === true && laststring === ulit){
          if(action === "add"){
            ctotalcomp(totalcomp.slice(0,-1) + " +");
            culit("+");
          }
          else if(action === "minus"){
            ctotalcomp(totalcomp.slice(0,-1) + " -");
            culit("-");
          }
          else if(action === "multiply"){
            ctotalcomp(totalcomp.slice(0,-1) + " X");
            culit("X");
          }
          else if(action === "divide"){
            ctotalcomp(totalcomp.slice(0,-1) + " /");
            culit("/");
          }


          e.preventDefault();
        }
        else{
          const totals = parseFloat(firstnum) - parseFloat(total);
          ctotal(totals);
          cfirstnum(totals);
          //add minus multiply divide
          if(action === "add"){
            ctotalcomp(totalcomp + " " + total + " +");
            culit("+");
          }
          else if(action === "minus"){
            ctotalcomp(totalcomp + " " + total + " -");
            culit("-");
          }
          else if(action === "multiply"){
            ctotalcomp(totalcomp + " " + total + " X");
            culit("X");
          }
          else if(action === "divide"){
            ctotalcomp(totalcomp + " " + total + " /");
            culit("/");
          }
          //end add minus multiply divide
          cafterchange(true);
          clock(true);
          e.preventDefault();
        }
      }
      //multiply
      if(laststring==="X"){
        if(lock === true && laststring === ulit){
          if(action === "add"){
            ctotalcomp(totalcomp.slice(0,-1) + " +");
            culit("+");
          }
          else if(action === "minus"){
            ctotalcomp(totalcomp.slice(0,-1) + " -");
            culit("-");
          }
          else if(action === "multiply"){
            ctotalcomp(totalcomp.slice(0,-1) + " X");
            culit("X");
          }
          else if(action === "divide"){
            ctotalcomp(totalcomp.slice(0,-1) + " /");
            culit("/");
          }


          e.preventDefault();
        }
        else{
          const totals = parseFloat(firstnum) * parseFloat(total);
          ctotal(totals);
          cfirstnum(totals);
          //add minus multiply divide
          if(action === "add"){
            ctotalcomp(totalcomp + " " + total + " +");
            culit("+");
          }
          else if(action === "minus"){
            ctotalcomp(totalcomp + " " + total + " -");
            culit("-");
          }
          else if(action === "multiply"){
            ctotalcomp(totalcomp + " " + total + " X");
            culit("X");
          }
          else if(action === "divide"){
            ctotalcomp(totalcomp + " " + total + " /");
            culit("/");
          }
          //end add minus multiply divide
          cafterchange(true);
          clock(true);
          e.preventDefault();
        }
      }
      //divide
      if(laststring==="/"){
        if(lock === true && laststring === ulit){
          if(action === "add"){
            ctotalcomp(totalcomp.slice(0,-1) + " +");
            culit("+");
          }
          else if(action === "minus"){
            ctotalcomp(totalcomp.slice(0,-1) + " -");
            culit("-");
          }
          else if(action === "multiply"){
            ctotalcomp(totalcomp.slice(0,-1) + " X");
            culit("X");
          }
          else if(action === "divide"){
            ctotalcomp(totalcomp.slice(0,-1) + " /");
            culit("/");
          }


          e.preventDefault();
        }
        else{
          const totals = parseFloat(firstnum) / parseFloat(total);
          ctotal(totals);
          cfirstnum(totals);
          //add minus multiply divide
          if(action === "add"){
            ctotalcomp(totalcomp + " " + total + " +");
            culit("+");
          }
          else if(action === "minus"){
            ctotalcomp(totalcomp + " " + total + " -");
            culit("-");
          }
          else if(action === "multiply"){
            ctotalcomp(totalcomp + " " + total + " X");
            culit("X");
          }
          else if(action === "divide"){
            ctotalcomp(totalcomp + " " + total + " /");
            culit("/");
          }
          //end add minus multiply divide
          cafterchange(true);
          clock(true);
          e.preventDefault();
        }
      }
      //to here

    }
    
  }
  const del = (e) =>{
    if(lock===false){
      if(total !== 0){
        ctotal(total.substring(0, total.length - 1));
      }
      e.preventDefault();
    }else{
      e.preventDefault();
    }
  }
  const tuldok = (e) =>{
    if(total === "+" || total === "-" || total === "*" || total === "/" || total === 0 || afterchange === true || total === "0"){
      ctotal("0.");
    }else{
      if(total.indexOf(".") < 1){
        ctotal(total + ".");
        e.preventDefault();
      }
    }
    clock(false);
    cafterchange(false);
    e.preventDefault();
  }
  const equals = (e)=>{
    const laststring = totalcomp.charAt(totalcomp.length-1);
    if(lock === true){
      ctotal(firstnum);
      e.preventDefault();
    }else{
      if(laststring === "+"){
        const totaladd = parseFloat(firstnum) + parseFloat(total);
        ctotalcomp(totalcomp + " " +total + " +");
        ctotal(totaladd);
        cfirstnum(totaladd);
      }
      else if(laststring === "-"){
        const totalminus = parseFloat(firstnum) - parseFloat(total);
        ctotalcomp(totalcomp + " " +total + " -");
        ctotal(totalminus);
        cfirstnum(totalminus);
      }
      else if(laststring === "X"){
        const totalmultiply = parseFloat(firstnum) * parseFloat(total);
        ctotalcomp(totalcomp + " " +total + " X");
        ctotal(totalmultiply);
        cfirstnum(totalmultiply);
      }
      else if(laststring === "/"){
        const totaldivide = parseFloat(firstnum) / parseFloat(total);
        ctotalcomp(totalcomp + " " +total + " /");
        ctotal(totaldivide);
        cfirstnum(totaldivide);
      }
      cafterchange(true);
      clock(true);
    }
    e.preventDefault();
  }

  return <form className="calc">
    <div className="showing"><span className='showing-span'>{totalcomp}</span></div><br></br>
    <div className="shownumber"><span className='shownum-span'>{total}</span></div><br></br>
    <button className='bigger-btn' onClick={clearnum}>C</button>
    <button className='del-btn' onClick={del}>DEL</button>
    <button onClick={action} value='add'>+</button>
    <br></br>
    <button onClick={numplat} value='7'>7</button>
    <button onClick={numplat} value='8'>8</button>
    <button onClick={numplat} value='9'>9</button>
    <button onClick={action} value='divide'>/</button><br></br>
    <button onClick={numplat} value='4'>4</button>
    <button onClick={numplat} value='5'>5</button>
    <button onClick={numplat} value='6'>6</button>
    <button onClick={action} value='multiply'>X</button><br></br>
    <button onClick={numplat} value='1'>1</button>
    <button onClick={numplat} value='2'>2</button>
    <button onClick={numplat} value='3'>3</button>
    <button onClick={action} value='minus'>-</button><br></br>
    <button onClick={numplat} value='0'>0</button>
    <button onClick={tuldok} value='.'>.</button>
    <button className='bigger-btn' onClick={equals}>=</button><br></br>
    <div>By: Lance Allen S. Reyes || 2022</div>
  </form>;
}
export default App;
//version3
