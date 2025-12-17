/**
 * API Helper Functions - Enhanced for API Testing
 */
class ApiHelpers {
  constructor(request, baseURL = 'https://automationexercise.com/api') {
    this.request = request;
    this.baseURL = baseURL;
  }

  /**
   * Build full URL
   */
  buildUrl(endpoint) {
    return endpoint.startsWith('http') ? endpoint : `${this.baseURL}${endpoint}`;
  }

  /**
   * GET request
   */
  async get(endpoint, options = {}) {
    const url = this.buildUrl(endpoint);
    return await this.request.get(url, options);
  }

  /**
   * POST request
   */
  async post(endpoint, data, options = {}) {
    const url = this.buildUrl(endpoint);
    return await this.request.post(url, {
      data,
      ...options
    });
  }

  /**
   * PUT request
   */
  async put(endpoint, data, options = {}) {
    const url = this.buildUrl(endpoint);
    return await this.request.put(url, {
      data,
      ...options
    });
  }

  /**
   * DELETE request
   */
  async delete(endpoint, options = {}) {
    const url = this.buildUrl(endpoint);
    return await this.request.delete(url, options);
  }

  /**
   * Verify response status
   */
  async verifyStatus(response, expectedStatus) {
    const status = response.status();
    if (status !== expectedStatus) {
      throw new Error(`Expected status ${expectedStatus}, got ${status}. Response: ${await response.text()}`);
    }
    return response;
  }

  /**
   * Verify response JSON
   */
  async verifyJson(response, expectedJson) {
    const json = await response.json();
    for (const [key, value] of Object.entries(expectedJson)) {
      if (json[key] !== value) {
        throw new Error(`Expected ${key} to be ${value}, got ${json[key]}`);
      }
    }
    return json;
  }

  /**
   * Verify response contains field
   */
  async verifyField(response, fieldName) {
    const json = await response.json();
    if (!(fieldName in json)) {
      throw new Error(`Expected field ${fieldName} not found in response`);
    }
    return json[fieldName];
  }

  /**
   * Extract token from response (if applicable)
   */
  async extractToken(response) {
    const json = await response.json();
    return json.token || json.access_token || json.auth_token;
  }

  /**
   * Set authorization header
   */
  setAuthHeader(token) {
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
  }
}

module.exports = ApiHelpers;


