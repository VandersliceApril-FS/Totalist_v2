# Production Plan


## Components
### Atoms
* buttons
* inputs
* links

### Molecules
* sign in: 
    * email address
    * password
    * submit button
    * github sign in link
    * forgot password link

* create new user
    * name
    * email
    * password
    * confirm password
    * checkbox
    * submit

* Edit list item
    * list title
    * store
    * cost
    * quantity
    * attachment
    * Done button
    * delete button
    
* New List/Edit List
    * list title
    * submit
* menu
    * All Lists
    * Account
    * Sign Out
* /lists item (all lists)
    * List title
    * List total
* lists/:id item
    * item title
    * item cost
    * item qty
    * if image, image icon
* list total
    * total


### Organisms




## Models
1. What name summarizes a group of data? 
Lists, Users, List Items
2. What data is part of each of these groups? (Hint: look at your forms as a start)
Lists: list items, list total
Users: email addresses, names, passwords
List Items: name, cost, qty, store ,image, completed
3. What data type is each of those items? (Hint: Do prop types already exist?)
    * email address: string
    * name: string
    * password: char(60)
    * list item name: string
    * list item cost: decimal
    * list item quantity: integer
    * list item store: string
    * list item image: string (path)
    * isComplete: boolean
    * list total: decimal
    * list title: string
4. Define what types of validation are needed
    * email address: not empty, valid email 
    * name: not empty
    * password: min 8 characters, not empty, confirmed (by entering again)
    * list item name: not empty, unique (doesn't already exist)
    * list item cost: not empty, not negative
    * list item quantity: default = 1, not empty, not negative
    * list item store: not required
    * list item image: not required
    * list total: will result from calculation, doesn't need to be validated. Would only cause a problem if the list items were invalid.
5. Define relationships:
    * users: user id, full name, password, lists belongTo(users). users canHaveMany(lists)
    * lists: title, total, users_id, lists canHaveMany(items), items belongTo(lists)
    * list items: lists_id, image, qty, cost, store, name

## State
1. Does each model need reducers/actions?
All Lists: needs to know each list title and list total


2. Is there any other data needed? What data handling approach can work for the application being proposed? How will a global store take shape? 
*Example additional data: notifications*
3. does this project need full CRUD for each item? Be sure to capture the agreed-upon requirements during stakeholder Q&A touchpoints. 

## API
1. Get All
    /lists
2. Get One
    /lists/:id
3. Create new list
    /lists/new
4. Create new list item 
    /lists/:id/items/new  <--- Not sure about this one
    /items/new
5. Update List Title
    /lists/:id/edit
6. Update list item
    /lists/:id/items/:id  <--- Not sure about this one
    /items/:id
7. Delete List
    /lists/:id
8. Delete Item
    /items/:id
