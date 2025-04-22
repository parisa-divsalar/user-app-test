import { useState } from 'react';
import { Stack } from '@mui/material';
import { FAQData } from '@/pages/Menu/FAQ/data.tsx';
import FAQCard from '@/components/Card/FAQ';
import { FQAType } from '@/type/common.ts';

const FAQ = () => {
  const [selectedFaqId, setSelectedFaqId] = useState<string | undefined>(undefined);

  return (
    <Stack p={2}>
      {FAQData.map((faq: FQAType) => (
        <FAQCard
          faq={faq}
          key={faq.id}
          selectedFaqId={selectedFaqId}
          setSelectedFaqId={setSelectedFaqId}
        />
      ))}
    </Stack>
  );
};

export default FAQ;
