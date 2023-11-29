const colors = {
  printColor() {
    console.log("first level");
    console.log(this);

    const printThis = () =>{
      console.log("arrow second level");
        console.log(this);
      }
      printThis();

      function printThat(){
        console.log("function second level");
          console.log(this);
        }
      printThat();
  }
}

const printThis = function(){
  console.log(this);
}

printThis()
printThis.call({color: "red"})
printThis.apply(Timer)
printThis.apply(timer)

