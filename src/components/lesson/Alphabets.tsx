import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import { useState } from 'react';
import FlipCard, { Card } from './FlipCard';
import { upperCaseArray } from '../../assets/alphabet/upper-case';

const Alphabets = () => {
  const [selected, setSelected] = useState(0);

  const back = () => {
      setSelected(selected => Math.max(selected - 1, 0));
  };

  const next = () => {
      setSelected(selected => Math.min(selected + 1, 2));
  };

  const card: Card = {
    back: upperCaseArray[0],
    inner: upperCaseArray[1],
    size: [250,250]
  }








  return (
    <div>
    <div className="w-72 h-72 pages">
        <FlippingPages
            direction="left-to-right"
            onSwipeEnd={setSelected}
            selected={selected}
        >
          <FlipCard card={card} />
          <FlipCard card={card} />
        </FlippingPages>
    </div>
    <button onClick={back}>Back</button>
    <button onClick={next}>Next</button>
</div>
  )
}

export default Alphabets