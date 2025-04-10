# Functional Requirements

## Authentication

- 4 types of accounts (superAdmin, admin, superVisor, operator)
- superAdmin is a unique account in the system
- superAdmin can controls all other accounts
- other accounts can't edit their email

## System global setup

- system can have more than one parking
- we have 2 types of calculation methods **_exact_** and **_round1Hour_**
- vat percentage and hidden fees to be added on each money transaction
- ability to set **_perEntry_** fees
- ability to set **_perHour_** fees

#### 🟡 _Questions about global setup_

- calculation method will be global on all parkings ??
- vat and hidden fees will be global on all parkings ??
- perHour and perEntry fees will be global on all parkings ??

## Parking setup

- we have 2 types of parking **_perEntry_** and **_perHour_**
- each parking can have more than one dispenser
- 2 types of fees calculation
- **_global_** : depends on the global fees of the system
- **_perVehicle_** : depends on the fees for each vehicle

## Cards setup

- 3 types of cards (subscription, manager, stored-value)

#### 🟡 _Questions about cards setup_

- _card holder will not get a ticket ??_
- _card holder can enter any parking in the system ??_
- _card holder can park any type of vehicles ??_

#### Supscription cards

- id, maxEntries, maxHours, startDate, endDate
- max entries
- max hours
- start date value
- end date value caluclated automatically based on supscription period selected

##### 🟡 Questions about supscription cards

- _minimum supscription period ?? if yes, how long ??_
- _pre-defined supsctiption periods ?? 'month, 2 months ... '_

## Tags

- tag is some electronic hardware to be put on the vehicle
- supscriber and stored-value cards can be assigend to a tag

### 🟡 Questions about tags

- _how can we know and validate the tag when the card is used ??_
