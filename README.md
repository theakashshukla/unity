# @astreak/unity

A comprehensive utility library for generating unique identifiers, random strings, numbers, and secure tokens. This library provides customizable functions to generate registration numbers, SKUs, order IDs, ticket request IDs, tracking numbers, and more.

## Installation

Install the package via npm:

```bash
npm install @astreak/unity
```

## Usage


```javascript

import { exmaple } = '@astreak/unity';

```

## API

### `example()`


### Generating Registration Number
Generate a secure and customizable registration number:

javascript


```javascript
const registrationNumber = generateRegistrationNumber('USR', 6, true, true);
console.log(registrationNumber); // Example output: USR-L8FJP-A1B2C3

```

### Generating SKU
Generate a secure and customizable SKU:

```javascript

const sku = generateSKU('ELEC', 8, true, true);
console.log(sku); // Example output: ELEC-L8FJP-A1B2C3D4

```


### Generating Order ID
Generate a secure and customizable order ID:

```javascript

const orderID = generateOrderID('ORD', 6, true, true);
console.log(orderID); // Example output: ORD-L8FJP-A1B2C3

```

### Generating Ticket ID
Generate a secure and customizable ticket ID:

```javascript
const ticketID = generateTicketID('TCK', 6, true, true);
console.log(ticketID); // Example output: TCK-L8FJP-A1B2C3
```

### Generating Tracking Number
Generate a secure and customizable tracking number:

```javascript
const trackingNumber = generateTrackingNumber('TRK', 8, true, true);
console.log(trackingNumber); // Example output: TRK-L8FJP-A1B2C3D4
```

### Generating Random String
Generate a random string of a specified length:

```javascript
const randomString = generateRandomString(10);
console.log(randomString); // Example output: a1b2c3d4e5
```

### Generating Random Number
Generate a random number within a specified range:

```javascript
const randomNumber = generateRandomNumber(1, 100);
console.log(randomNumber); // Example output: 42
```

### Generating Random Hex
Generate a random hexadecimal string of a specified length:

```javascript
const randomHex = generateRandomHex(6);
console.log(randomHex); // Example output: a1b2c3
```

### Generating Random Password
Generate a random password of a specified length:

```javascript
const randomPassword = generateRandomPassword(10);
console.log(randomPassword); // Example output: A1b2C3d4E5
```

### Generating Random Token
Generate a random token of a specified length:

```javascript
const randomToken = generateRandomToken(16);
console.log(randomToken); // Example output: a1b2c3d4e5f6a7b8
```

### Generating Random IV
Generate a random initialization vector (IV) for encryption:

```javascript
const randomIV = generateRandomIV();
console.log(randomIV); // Example output: a1b2c3d4e5f6a7b8c9d0e1f2
```