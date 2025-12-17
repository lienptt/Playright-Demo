/**
 * API Test Data - Dữ liệu test cho API
 */
const apiTestData = {
  baseURL: 'https://automationexercise.com/api',
  
  // User data for API
  users: {
    newUser: {
      name: 'Test User',
      email: `testuser_${Date.now()}@example.com`,
      password: 'Test123!@#',
      title: 'Mr',
      birth_day: '15',
      birth_month: '05',
      birth_year: '1990',
      firstname: 'Test',
      lastname: 'User',
      company: 'Test Company',
      address1: '123 Test Street',
      address2: 'Apt 4B',
      country: 'United States',
      zipcode: '90001',
      state: 'California',
      city: 'Los Angeles',
      mobile_number: '1234567890'
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
    productId: 1,
    searchTerm: 'top',
    category: 'women',
    brand: 'polo'
  },
  
  // Cart data
  cart: {
    product_id: 1,
    quantity: 1
  },
  
  // Order data
  order: {
    cart_id: 1,
    shipping_address: {
      firstname: 'Test',
      lastname: 'User',
      address1: '123 Test Street',
      city: 'Los Angeles',
      state: 'California',
      zipcode: '90001',
      country: 'United States',
      mobile_number: '1234567890'
    },
    payment_method: 'credit_card',
    payment_details: {
      card_number: '4111111111111111',
      card_name: 'Test User',
      expiry_date: '12/25',
      cvv: '123'
    }
  },
  
  // Expected responses (from https://automationexercise.com/api_list)
  expectedResponses: {
    // Success responses
    userExists: {
      responseCode: 200,
      message: 'User exists!'
    },
    userCreated: {
      responseCode: 201,
      message: 'User created!'
    },
    accountDeleted: {
      responseCode: 200,
      message: 'Account deleted!'
    },
    userUpdated: {
      responseCode: 200,
      message: 'User updated!'
    },
    
    // Error responses
    methodNotSupported: {
      responseCode: 405,
      message: 'This request method is not supported.'
    },
    missingParameter: {
      responseCode: 400,
      message: 'Bad request, email or password parameter is missing in POST request.'
    },
    missingSearchParameter: {
      responseCode: 400,
      message: 'Bad request, search_product parameter is missing in POST request.'
    },
    userNotFound: {
      responseCode: 404,
      message: 'User not found!'
    }
  },
  
  // API endpoints (from https://automationexercise.com/api_list)
  endpoints: {
    // Product APIs
    productsList: '/productsList',           // API 1: GET
    searchProduct: '/searchProduct',         // API 5: POST
    
    // Brand APIs
    brandsList: '/brandsList',               // API 3: GET
    
    // Authentication APIs
    verifyLogin: '/verifyLogin',             // API 7, 8, 9, 10: POST/DELETE
    
    // User Account APIs
    createAccount: '/createAccount',         // API 11: POST
    deleteAccount: '/deleteAccount',         // API 12: DELETE
    updateAccount: '/updateAccount',         // API 13: PUT
    getUserDetailByEmail: '/getUserDetailByEmail' // API 14: GET
  },
  
  // Search terms for testing
  searchTerms: {
    valid: ['top', 'tshirt', 'jean'],
    invalid: ['nonexistent123', 'xyzabc']
  }
};

module.exports = apiTestData;

