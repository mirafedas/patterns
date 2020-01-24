// Цей патерн використовується для координування роботи різних модулів - він отримує події від них і може їх запускати чи призупиняти їх роботу залежно від отриманих даних.

const module1 = () => {
 mediator(true);
 return true;
}

const module2 = () => {
 mediator(false);
 return false;
}

const module3 = () => {
  console.log(1);
}

const mediator = (data) => {
  if (data) {
    module2();
  } else {
    module3();
  }
}

module1();
