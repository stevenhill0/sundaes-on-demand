import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';
import ToppingsOption from './ToppingsOption';

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  console.log(items);
  //option type is scoop or toppings. NOTE: if for real app use Enums (fixed constants)
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => {
        return setItems(response.data);
      })
      .catch((error) => {
        //TODO: Add error response
      });
  }, [optionType, setItems]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingsOption;

  const optionItems = items.map((item) => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });

  return <Row>{optionItems}</Row>;
};

export default Options;
