# API Testing Guide

## 📋 Tổng quan

Website cung cấp **14 API endpoints** để thực hành API testing.

Nguồn: https://automationexercise.com/api_list

## 🔗 API Endpoints

### Authentication APIs (4)
- **API 7**: POST Verify Login - Valid (200)
- **API 8**: POST Verify Login - Missing Email (400)
- **API 9**: DELETE Verify Login - Unsupported (405)
- **API 10**: POST Verify Login - Invalid (404)

### User Account APIs (4)
- **API 11**: POST Create Account (201)
- **API 12**: DELETE Delete Account (200)
- **API 13**: PUT Update Account (200)
- **API 14**: GET User Detail by Email (200)

### Product APIs (4)
- **API 1**: GET Products List (200)
- **API 2**: POST Products List - Unsupported (405)
- **API 5**: POST Search Product (200)
- **API 6**: POST Search Product - Missing Param (400)

### Brand APIs (2)
- **API 3**: GET Brands List (200)
- **API 4**: PUT Brands List - Unsupported (405)

## 🏗️ Cấu trúc API Tests

```
tests/api/
├── authentication/
│   ├── verify-login.spec.js      # API 7, 8, 9, 10
│   ├── create-account.spec.js    # API 11
│   ├── delete-account.spec.js    # API 12
│   ├── update-account.spec.js    # API 13
│   └── get-user-detail.spec.js  # API 14
├── products/
│   ├── products-list.spec.js     # API 1, 2
│   └── search-product.spec.js   # API 5, 6
└── brands/
    └── brands-list.spec.js       # API 3, 4
```

## 🚀 Implementation Plan

### Week 1: Setup + Authentication + Products
- Day 1: Setup infrastructure
- Day 2-3: Authentication API tests
- Day 4-5: Product API tests

### Week 2: Cart + Orders + Integration
- Day 6-7: Cart API tests
- Day 8: Order API tests
- Day 9-10: Integration với UI tests

### Week 3: Documentation + Refinement
- Day 11: Documentation
- Day 12-14: Refinement

## 📝 Test Data

File: `tests/utils/api-test-data.js`
- User data
- Product data
- Expected responses
- API endpoints mapping

## 🔧 API Helpers

File: `tests/helpers/api-helpers.js`
- GET, POST, PUT, DELETE methods
- Response validation
- Error handling
- Authentication helpers

## 💡 Best Practices

1. **Use API for Setup/Cleanup** - Nhanh và reliable
2. **Verify critical data changes** - Đảm bảo data consistency
3. **Don't duplicate API tests** - Tránh redundancy
4. **Pure UI tests giữ nguyên** - Không cần API verification

## 📚 Resources

- API List: https://automationexercise.com/api_list
- Base URL: https://automationexercise.com/api
- Playwright API Testing: https://playwright.dev/docs/api-testing

