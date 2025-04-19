app
├── login
├── unauthorized
├── (application)
│ ├── dashboard
│ ├── users
│ ├── parkings
│ │ ├── setup
│ │ ├── categories
│ │ ├── dispensers
│ ├── cards
│ │ ├── setup
│ │ ├── list
│ ├── operations
│ │ ├── pos
│ │ ├── recharge
│ ├── tags

components
├── atoms
│ │ ├──
├── molecules
│ │ │ ├──InputField.tsx
├── organisms
│ │ ├── tables
│ │ │ ├── UserTable.tsx
│ │ │ ├── ParkingTable.tsx
│ │ │ ├── TicketCategoryTable.tsx
│ │ │ ├── CardCategoryTable.tsx
│ │ │ ├── DispenserTable.tsx
│ │ │ ├── SubscriptionCardTable.tsx
│ │ │ ├── StoredValueCardTable.tsx
│ │ │ ├── ManagerCardTable.tsx
│ │ │ ├── PolicyTable.tsx
│ │ ├── forms
│ │ │ ├── UserForm.tsx
│ │ │ ├── ParkingForm.tsx
│ │ │ ├── TicketCategoryForm.tsx
│ │ │ ├── DispenserForm.tsx
│ │ │ ├── CardCategoryForm.tsx
│ │ │ ├── ManagerCardSetupForm.tsx
│ │ │ ├── SubscriptionCardSetupForm.tsx
│ │ │ ├── StoredValueCardSetupForm.tsx
│ │ │ ├── PolicyForm.tsx
│ │ │ ├── ManagerCardForm.tsx
│ │ │ ├── SubscriptionCardForm.tsx
│ │ │ ├── StoredValueCardForm.tsx
│ │ │ ├── POSForm.tsx
│ │ │ ├── RechargeCardForm.tsx
├── layout
│ │ ├── Sidebar.tsx
│ │ ├── Topbar.tsx
│ │ ├── RootLayout.tsx
│ │ ├── AuthLayout.tsx
│ │ ├── AppLayout.tsx
├── screens

types
├── user.d.ts
├── parking.d.ts
├── ticket-category.d.ts
├── card-category.d.ts
├── dispenser.d.ts
├── policy.d.ts
├── api-requests.d.ts
├── api-responses.d.ts

services
├── user.api.ts
├── parking.api.ts
├── card.api.ts
├── operation.api.ts

public
├── data
│ ├── user-list.json
│ ├── parking-list.json
│ ├── ticket-category-list.json
│ ├── card-category-list.json
│ ├── dispenser-list.json
│ ├── manager-card-setup.json
│ ├── subscription-card-setup.json
│ ├── storedvalue-card-setup.json
│ ├── policies-list.json
│ ├── subscription-card-list.json
│ ├── manager-card-list.json
│ ├── storedvalue-card-list.json
