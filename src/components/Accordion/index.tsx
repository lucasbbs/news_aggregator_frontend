import { useState } from 'react';
import AccordionItem from './AccordionItem';

import { ReactNode } from 'react';
import { AccordionUnorderedList } from './styles';

export type AccordionData = {
  title: string;
  content: ReactNode;
};

function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <AccordionUnorderedList className="accordion">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </AccordionUnorderedList>
  );
}

export default Accordion;