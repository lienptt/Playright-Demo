# Playwright Test Automation - AutomationExercise.com

## 📋 Tổng quan

Project automation testing cho website [AutomationExercise.com](https://automationexercise.com/) sử dụng Playwright.

### ✅ Đã hoàn thành

- ✅ **11 UI Test Cases** (Authentication, Products, Checkout, UI)
- ✅ **7 Page Objects** (HomePage, LoginPage, SignupPage, ProductPage, CartPage, CheckoutPage, BasePage)
- ✅ **Cấu trúc chuẩn** (Page Object Model, Test Data tập trung)
- ✅ **API Test Plan** (14 API endpoints)
- ✅ **MCP Integration Plan**

## 🏗️ Cấu trúc Project

```
PlaywrightDemo/
├── package.json
├── playwright.config.js
├── README.md                    # File này
├── TEST_GUIDE.md               # Hướng dẫn test
├── API_GUIDE.md                # Hướng dẫn API testing
├── MCP_GUIDE.md                # Hướng dẫn MCP
│
└── tests/
    ├── authentication/         # Authentication Tests (4 tests)
    ├── products/              # Product Tests (2 tests)
    ├── checkout/               # Checkout Tests (2 tests)
    ├── ui/                     # UI Tests (2 tests)
    ├── api/                    # API Tests (planned)
    ├── pages/                  # Page Objects
    ├── helpers/                # Helper Functions
    ├── utils/                  # Test Data
    └── fixtures/               # Custom Fixtures
```

## 🚀 Quick Start

### Cài đặt
```bash
npm install
npx playwright install
```

### Chạy tests
```bash
# Tất cả tests
npm test

# Theo nhóm
npm run test:auth
npm run test:products
npm run test:checkout

# Với UI mode
npm run test:ui

# Với browser hiển thị
npm run test:headed
```

## 📚 Documentation

- **[TEST_GUIDE.md](./TEST_GUIDE.md)** - Hướng dẫn test cases và commands
- **[API_GUIDE.md](./API_GUIDE.md)** - Hướng dẫn API testing
- **[MCP_GUIDE.md](./MCP_GUIDE.md)** - Hướng dẫn MCP integration

## 📊 Test Coverage

### UI Tests (11 test cases)
- ✅ TC1: Register User
- ✅ TC2-3: Login User
- ✅ TC4: Logout User
- ✅ TC5: Register with existing email
- ✅ TC9: Search Product
- ✅ TC12: Add Products in Cart
- ✅ TC14: Place Order
- ✅ TC24: Download Invoice
- ✅ TC25-26: Scroll Tests

### API Tests (14 endpoints - Planned)
- Authentication APIs (4)
- User Account APIs (4)
- Product APIs (4)
- Brand APIs (2)

## 🎯 Best Practices

1. **Page Object Model** - Tách biệt logic và elements
2. **Test Data tập trung** - Dễ quản lý
3. **Cấu trúc rõ ràng** - Dễ maintain
4. **Cleanup trong tests** - Test độc lập
5. **Unique test data** - Tránh conflict

## 📖 Tài liệu tham khảo

- Website: https://automationexercise.com/
- Test Cases: https://automationexercise.com/test_cases
- API List: https://automationexercise.com/api_list
- Playwright Docs: https://playwright.dev/





