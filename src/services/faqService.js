// Define the base URL for your API
const BASE_URL = 'http://localhost:5000/faqs';

// Fetch all FAQs
export const getFAQs = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch FAQs');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error;
  }
};

// Fetch a single FAQ by ID
export const getFAQById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch FAQ');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    throw error;
  }
};

// Create a new FAQ
export const createFAQ = async (faq) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(faq),
    });
    if (!response.ok) {
      throw new Error('Failed to create FAQ');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating FAQ:', error);
    throw error;
  }
};

// Update an existing FAQ
export const updateFAQ = async (id, faq) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(faq),
    });
    if (!response.ok) {
      throw new Error('Failed to update FAQ');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating FAQ:', error);
    throw error;
  }
};

// Delete an FAQ
export const deleteFAQ = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete FAQ');
    }
    return true;
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    throw error;
  }
};
