import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import type { ReactElement } from 'react';

export interface CategoryCardProps {}

export default function CategoriesCard(props: CategoryCardProps): ReactElement {
  return (
    <>
      <Card className="bg-transparent">
        <CardHeader>
          <h3 className="font-bold text-2xl">Categories</h3>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}
