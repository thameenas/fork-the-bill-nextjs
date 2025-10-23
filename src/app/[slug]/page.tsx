import { Metadata } from 'next';
import ExpenseView from '../../components/ExpenseView';
import { getExpense } from '../../api/client';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const expense = await getExpense(slug);
    return {
      title: `Fork the Bill - ${expense.restaurantName}`,
      description: `Split bill for ${expense.restaurantName} paid by ${expense.payerName}. Total: ₹${expense.totalAmount.toFixed(2)}`,
      openGraph: {
        title: `Fork the Bill - ${expense.restaurantName}`,
        description: `Paid by ${expense.payerName}. Total: ₹${expense.totalAmount.toFixed(2)}`,
        type: 'website',
        images: [],
      },
    };
  } catch {
    return {
      title: 'Expense Not Found - Fork the Bill',
      description: 'The requested expense could not be found.',
    };
  }
}

export default async function ExpensePage({ params }: PageProps) {
  const { slug } = await params;
  
  return <ExpenseView slug={slug} />;
}
