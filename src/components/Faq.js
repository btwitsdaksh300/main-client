import React, { useEffect, useState } from 'react';
import { getFAQs, createFAQ, updateFAQ, deleteFAQ, getFAQById } from '../services/faqService';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const data = await getFAQs();
        setFaqs(data);
      } catch (error) {
        console.error('Failed to fetch FAQs:', error);
      }
    };

    fetchFAQs();
  }, []);

  const handleCreate = async (newFAQ) => {
    try {
      const createdFAQ = await createFAQ(newFAQ);
      setFaqs([...faqs, createdFAQ]);
    } catch (error) {
      console.error('Failed to create FAQ:', error);
    }
  };

  const handleUpdate = async (id, updatedFAQ) => {
    try {
      const updated = await updateFAQ(id, updatedFAQ);
      setFaqs(faqs.map(faq => faq.id === id ? updated : faq));
    } catch (error) {
      console.error('Failed to update FAQ:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFAQ(id);
      setFaqs(faqs.filter(faq => faq.id !== id));
    } catch (error) {
      console.error('Failed to delete FAQ:', error);
    }
  };

  return (
    <div>
      <h1>FAQs</h1>
      
    </div>
  );
};

export default Faq;
