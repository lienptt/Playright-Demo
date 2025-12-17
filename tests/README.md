# Test Scripts - AutomationExercise.com

## Cấu trúc Test Scripts

### Authentication Tests (`/tests/authentication/`)
- **register-user.spec.js** - TC1: Register User
- **login-user.spec.js** - TC2: Login with correct credentials, TC3: Login with incorrect credentials
- **logout-user.spec.js** - TC4: Logout User
- **register-existing-email.spec.js** - TC5: Register with existing email

### Product Tests (`/tests/products/`)
- **add-to-cart.spec.js** - TC12: Add Products in Cart
- **search-product.spec.js** - TC9: Search Product

### Checkout Tests (`/tests/checkout/`)
- **place-order.spec.js** - TC14: Place Order - Register while Checkout
- **download-invoice.spec.js** - TC24: Download Invoice after purchase order

### UI Tests (`/tests/ui/`)
- **scroll-test.spec.js** - TC25: Scroll Up with Arrow, TC26: Scroll Up without Arrow

## Chạy Tests

### Chạy tất cả tests:
```bash
npm test
```

### Chạy tests theo nhóm:
```bash
# Authentication tests only
npx playwright test tests/authentication

# Product tests only
npx playwright test tests/products

# Checkout tests only
npx playwright test tests/checkout
```

### Chạy test cụ thể:
```bash
npx playwright test tests/authentication/register-user.spec.js
```

### Chạy với UI mode:
```bash
npm run test:ui
```

### Chạy với browser hiển thị:
```bash
npm run test:headed
```

### Chạy ở chế độ debug:
```bash
npm run test:debug
```

## Test Cases đã implement

✅ **TC1**: Register User  
✅ **TC2**: Login User with correct email and password  
✅ **TC3**: Login User with incorrect email and password  
✅ **TC4**: Logout User  
✅ **TC5**: Register User with existing email  
✅ **TC9**: Search Product  
✅ **TC12**: Add Products in Cart  
✅ **TC14**: Place Order: Register while Checkout  
✅ **TC24**: Download Invoice after purchase order  
✅ **TC25**: Verify Scroll Up using 'Arrow' button  
✅ **TC26**: Verify Scroll Up without 'Arrow' button  

## Test Cases còn lại (có thể implement thêm)

- TC6: Contact Us Form
- TC7: Verify Test Cases Page
- TC8: Verify All Products and product detail page
- TC10: Verify Subscription in home page
- TC11: Verify Subscription in Cart page
- TC13: Verify Product quantity in Cart
- TC15: Place Order: Register before Checkout
- TC16: Place Order: Login before Checkout
- TC17: Remove Products From Cart
- TC18: View Category Products
- TC19: View & Cart Brand Products
- TC20: Search Products and Verify Cart After Login
- TC21: Add review on product
- TC22: Add to cart from Recommended items
- TC23: Verify address details in checkout page

## Notes

- Tất cả tests sử dụng Page Object Model pattern
- Test data được quản lý tập trung trong `tests/utils/test-data.js`
- Mỗi test case có cleanup (delete account) để đảm bảo test độc lập
- Sử dụng unique email với timestamp để tránh conflict
