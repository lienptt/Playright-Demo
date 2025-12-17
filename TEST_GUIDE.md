# Test Guide - Hướng dẫn Test Cases và Commands

## 📋 Test Cases

### 1. Authentication Tests
- **TC1**: Register User
- **TC2**: Login User with correct credentials
- **TC3**: Login User with incorrect credentials
- **TC4**: Logout User
- **TC5**: Register User with existing email

### 2. Product & Shopping Tests
- **TC9**: Search Product
- **TC12**: Add Products in Cart
- **TC14**: Place Order - Register while Checkout
- **TC24**: Download Invoice after purchase order

### 3. UI/UX Tests
- **TC25**: Scroll Up using Arrow button
- **TC26**: Scroll Up without Arrow button

## 🚀 Test Commands

### Chạy tất cả tests
```bash
npm test
```

### Chạy theo nhóm
```bash
npm run test:auth        # Authentication tests
npm run test:products    # Product tests
npm run test:checkout    # Checkout tests
npm run test:ui-tests    # UI tests
```

### Chạy với options
```bash
npm run test:ui          # UI mode
npm run test:headed      # Browser hiển thị
npm run test:debug       # Debug mode
npm run test:single      # 1 worker (tuần tự)
npm run test:failed      # Chạy lại failed tests
```

### Chạy file cụ thể
```bash
npx playwright test tests/authentication/register-user.spec.js
npx playwright test tests/authentication/register-user.spec.js --headed
npx playwright test tests/authentication/register-user.spec.js --debug
```

### Chạy với grep
```bash
npx playwright test --grep "register"
npx playwright test --grep "TC1"
```

## 📝 Test Cases còn lại (có thể implement)

- TC6: Contact Us Form
- TC7: Verify Test Cases Page
- TC8: Verify All Products
- TC10-11: Subscription tests
- TC13: Verify Product quantity
- TC15-16: Place Order variations
- TC17: Remove Products
- TC18-19: Category & Brand
- TC20-23: Additional features

## 🎯 Execution Strategy

- Run tests in parallel where possible
- Use fixtures for authenticated sessions
- Group related tests in describe blocks
- Use tags for test categorization

