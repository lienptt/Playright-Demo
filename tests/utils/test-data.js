const testData = {
  // Base URL
  baseURL: 'https://automationexercise.com',
  
  // User data
  users: {
    newUser: {
      name: 'Lienptt Test',
      email: `lienptt_${Date.now()}@example.com`,
      password: 'Test123!@#',
      title: 'Mrs',
      firstName: 'Lien',
      lastName: 'Test',
      company: 'Playwright Demo',
      address1: '123 Test Street',
      address2: 'Apt 4B',
      country: 'United States',
      state: 'California',
      city: 'Los Angeles',
      zipcode: '90001',
      mobileNumber: '1234567890',
      day: '3',
      month: 'April',
      year: '2000'
    },
    existingUser: {
      email: 'existing@example.com',
      password: 'password123'
    },
    invalidUser: {
      email: 'invalid@example.com',
      password: 'wrongpassword'
    }
  },
  
  // Product data
  products: {
    blueTop: 'Blue Top',
    menTshirt: 'Men Tshirt',
    sleevelessDress: 'Sleeveless Dress'
  },
  
  // Contact form data
  contact: {
    name: 'Contact Test',
    email: 'contact@example.com',
    subject: 'Test Subject',
    message: 'This is a test message for contact form.'
  },
  
  // Payment data
  payment: {
    nameOnCard: 'Lienptt Test',
    cardNumber: '1234567890',
    cvc: '123',
    expiryMonth: '12',
    expiryYear: '2026'
  },
  
  // Timeouts
  timeouts: {
    short: 5000,
    medium: 10000,
    long: 30000
  }
};

module.exports = testData;

