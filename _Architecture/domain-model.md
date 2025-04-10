# Domain Model

## Entities

- system
- parking
- vehicleCategory
- user
- card
- tag
- ticket
- transaction
- dispenser

## _System Level Configurations_

- parking List

- perHour fees
- perEntry fees
- vehicle categories **_[truck : {perHour: "10", perEntry:"20"}]_**

- feesRound => **_round to [10] EGP_**

  > this needs to be dynamic, round to integer, may be 1EGP or 10EGP  
  > in the ui we can show options to round to 1 hour or 1/2 hour, but at the end it translates to an integer based on the perHour value

- vat fees => **_14%_**
- physicalCardCost => **_120EGP_**
- subscriptionTarrifsPerDay => **_0.5EGP_**
- pysicalTagCost => **_50EGP_**
- lost ticket fees => **_10EGP_**
- optionalExtraAddons [whatsappIntegration, emailIntegration, SMS options] ??
- hidden fees [operationsFees, electricity, xyz 50] ??
- cardConfiguration {} ??
- operationFees [physicalCard: 100EGP, tag: 200Egp] ??

> ### Fllowing properties can be overridden on the parking level configurations

- perHour fees
- perEntry fees
- vehicle categories
- lost ticket fees
- feesRound

---

---

## _Parking Level Configurations_

- name
- dispensersList
- perEntry fees => **_You can use system global value, or you can set a custom value for this parking_**
- perHour fees => **_You can use system global value, or you can set a custom value for this parking_**
- lost ticket fees => **_You can use system global value, or you can set a custom value for this parking_**
- feesRound => **_You can use system global value, or you can set a custom value for this parking_** => **_round to [20] EGP_**
- parking type => **_Select menu, or radio input [perHour, perEntry]_**

- isPerVehicle => **_[true, false]_**
  > if false, all vehicles will be the same fees  
  > if true, each vehicle will have custom fees  
  > if true, you can depend on the system global fees, or you can customize vehicle fees for this parking
- vehicle categories => **_You can use system global categories fees, or you can set a custom category for this parking_**

#### 🟡 Questions about subscription card

- _if we have 2 parkings, perHour and perEntry, how would the POS operator send to the backend the category?_

---

---

## _vehicleCategory_

- name
- perHour fees
- perEntry fees

---

---

## _Card Configurations_

#### _Options for all cards_

- id
- cardNumber
- allowed parkings
  > if just 1 parking in the system, don't show this option
- is active
- expirarionDate
- extraOptions
  > like adding whatsapp integration or other extra features  
  > options are configured on the system level  
  > drop down select with checkboxes
- phoneNumber
- email

### _Supscription Card_ "Options for subscription cards only"

- start date
- end date
- allowedTimeFrame
  > [08:00 AM until 05:00 PM] or he can use all hours
- allowedWeedDays
  > [sunday, monday, tuesday, wednsday, thurday] or he can use all week days
- gracePeriod
  > period for allowing the card to be used after end date
- fairUsePolicy [true | false]
  > if true, show the following configurations, max hours and max entries
- max hours
  > show in the ui only if one of the parkings selected for this card is perHour
- max entries
  > show in the ui only if one of the parkings selected for this card is perEntry

### _Stored-Value Card_ "Options for stored-value cards only"

- balance

### _Manager Card_ "Options for manager cards only"

- .

---

---

## _Subscription Tag_

- .

---

---

## _Dispenser configurations_

- name
- ip
- status
- leadNumber
  > a number to be integrated in the ticket id
