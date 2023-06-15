import { RefObject, useEffect, useRef, useState } from 'react';
import { ReactNode } from 'react';
import { AccordionItemButton, AccordionItemContainer, AccordionItemContent, AccordionItemListItem, AccordionItemTitle } from './styles';

type AccordionData = {
  title: string;
  content: ReactNode;
};

function getRefValue<C>(ref: RefObject<C>) {
  return ref.current as C;
}

function AccordionItem({
  data,
  isOpen,
  btnOnClick,
}: {
  data: AccordionData;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <AccordionItemListItem>
      <AccordionItemTitle>
        <AccordionItemButton isOpen={isOpen} onClick={btnOnClick}>
          {data.title}
        </AccordionItemButton>
      </AccordionItemTitle>
      <AccordionItemContainer style={{ height }}>
        <AccordionItemContent ref={contentRef}>
          {data.content}
        </AccordionItemContent>
      </AccordionItemContainer>
    </AccordionItemListItem>
  );
}

export default AccordionItem;