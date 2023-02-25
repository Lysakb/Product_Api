## Product_Api

REQUIREMENTS
1. User should have a username, email, password and role.
2. User should be able to signup and signin into the product API.
3. User will sign in using JWT strategy and token expires in 1 hour.
4. Default role is admin. Other roles are user and vendor.
5. Only admin can upgrade user role to vendor.
6. Only admin should be able to update, edit and delete products.
7. Users can add to cart.
8. Users are able to comment on each product.
9. Users should be able to only view available products.


SETUP
1. Install dependencies
2. run `npm run dev`>> to run index.js



### user model
| field  |  data_type | constraints  |
|---|---|---|
|  username | string  |  required |
|  lastname  |  string |  required |
|  email     | string  |  required |
|  password |   string |  required  |

### product model
| field  |  data_type | constraints  |
|---|---|---|
|  product_name |  string |  required |
|  category |  string |  required |
|  description | string  |  required |
|  image  |  string |  required  |
|  comment  | string  |  required |
|  price |   number |  required  |
|  available |  string |  required |

### cart model
| field  |  data_type | constraints  |
|---|---|---|
| quantity | string  |  required |

### comment model
| field  |  data_type | constraints  |
|---|---|---|
|  text | string  |  required |

### user-signup

- Route: /user/signup
- Method: POST
- Body: 
``
{
  "username": "Elizabeth",
  "email": "Elizabeth@gmail.com",
  "password": "Eli"
}
``

### user-login 

- Route: /user/login
- Method: POST
- Body: 
``
{
  "email": "Elizabeth@gmail.com",
  "password": "Eli"  
}
``
### PRODUCT-MODEL

### Create product

- Route: /product/add
- Method: POST
- Header - Authorization: Bearer {token}

---

### Get product >> get all product

- Route: /product/get
- Method: GET

---

### Get product >> get available product

- Route: /product/available
- Method: GET

---

### Get product by id >> get a particular product

- Route: /product/get/:id
- Method: GET

---

### Update product by id

- Route: /product/update/:id
- Method: PUT
- Header - Authorization: Bearer {token}

---

### Delete product by id

- Route: /product/delete/:id
- Method: DELETE
- Header - Authorization: Bearer {token}

---

### CART-MODEL

### Get cart >> get all carts

- Route: /cart/get-cart
- Method: GET

---

### Create cart >> add cart

- Route: /cart/add-to-cart
- Method: POST

---

### COMMENT-MODEL

### Create comment >> add comment

- Route: /comment/:id
- Method: POST

---

## MIDDLEWARE

### Authentication
This enables authentication of users

### Authorization
This enables authorization of admin and vendors
