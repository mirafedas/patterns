// Модуль дозволяє приховувати приватну інформацію в замиканнях, даючи доступ лише до того, що вирішив зробити загальнодоступним розробник. Наприклад, це IIFE (Immediately-Invoked Function Expression, функція, яка викликається одразу після оголошення і яка, як і інші функції, має внутрішню область видимості, плюс після її виконання вже неможливо доступитись до її області видимості), яка повертає об'єкт. Все, що є в області видимості цього об'єкта, доступне ззовні, а те, що не в ньому - не доступне. 

const Module = (() => {
  const privateMethod = () => {
    console.log('this method is not reachable from the outside');
  };
  
  return {
    publicMethod: () => {
      console.log('this method is reachable from the outside');
    }
  };
})();

Module.publicMethod();
