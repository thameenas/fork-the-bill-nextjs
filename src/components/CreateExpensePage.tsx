'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ReceiptUpload from './ReceiptUpload';

const CreateExpensePage: React.FC = () => {
  const router = useRouter();

  const handleExpenseCreated = async (slug: string) => {
    router.push(`/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <ReceiptUpload onExpenseCreated={handleExpenseCreated} />
    </div>
  );
};

export default CreateExpensePage;
