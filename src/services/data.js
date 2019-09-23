const URL =
  "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";

const data = () => {
  return fetch(URL)
    .then(response => response.json())
    .then(data => data);
};

export default data;
