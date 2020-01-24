// Прикладом може бути клас, який може мати тільки один екземпляр, до якого є певна точка доступу і який має певні публічні методи. 

const counterModule = (() => {
  let instance;
  let counter = 0;

  const getCounter = () => {
    return counter;
  }

  const increaseCounter = () => {
    counter ++;
  }

  const createInstance = () => {
    return {
      getCounter: getCounter,
      increaseCounter: increaseCounter
    }
  }

  return {
    getInstance: () => {
      return instance || (instance = createInstance());
    }
  }
})();
