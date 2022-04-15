# Final Project 

* **RESEARCH - ASSIGNMENT TITLE HERE, .i.e. ..."Research & Integrative Activity - Week 1"**
* **First Last Name**
* **Assignment Due Date**

<br>

## Understanding Redux 

* Reducer: what holds the functions that make changes to the state
* Action: events that occure in the app based o nuser input and trigger updates in the state
* Action Type; the type of action
* Action Creator: where in the app the action came from
* Action Payload: the data that will update the global store
* Dispatch: how action is sent to the reducer
* Store: the single source of truth that drives the app
* One way data flow: Actions -> State -> View
 

<br>

## Using Redux Store Like a Database
Article discusses how data can be structured in the redux store.

* Array of flat objects [{values}]. Common, but hard to access a specific item without iterating and filtering
* Object keyed on id {id: {values}}. Easy to access a specific item, but accessing the id of a specific item is more difficult.
* Database of rows indxed by id. The id is bot the key for the row *and a property of the row itself*. Easy access to id and values, and compatible with the normalized or flat shape redux recommends.

Example:
lists: {
    '32o8wafe': {id:'32o8wafe', name: 'groceries', items:[...]},
    'oaiwefjo': {id: 'oaiwefjo', name: 'houseplants', items:[...]},
}

* easy access to id while iterating:
`Object.values(lists).map(list => ({id: list.id, name: list.name}))`

* access individual item by id
`lists['23o8wafe'].name`  // 'groceries'

<br>

## Organizing Reducers
Using functional decomposition and reducer composition to refactor reducer logic. This helps keep the intent behind Redux code clearer and the code itself more manageable.

* Extract utility functions. Find common patterns that can be extracted out of the reducer logic and made into its own function:
    * examples in the article: 
        * updateObject(). Returns a new object with updated fields
        * updateItemInAray() update only one item and preserve all the others from accidental mutation
* Extract Case Reducers: Split each case into its own function
    * case 'EDIT_TODO': {} -> function editTodo(state, action){}. return updateObject()
    * the app reducer then calls the function in the switch statement. Makes it clearer to read.
* Separating Data Handling by Domain
* Reducing Boilerplate by using createReducer then combineReducers instead of switch statements.
    * After that, there are split-up reducer fnctions, helper utitlities like updateObject() and createReducer(), and slice-of-state-handlers like visibilityReducer. appReducer is now the "root reducer" 

<br>

## Understanding Flow
[Redux Async Data Flow](https://redux.js.org/tutorials/fundamentals/part-6-async-logic#redux-async-data-flow)
This example is helpful in showing us how to know when to make new API requests, and error handling responses from an API.

* Redux middleware can be triggered to do anything by a dispatched action: log something, modify the action, delay the action, make an async call, etc
* get the action/thunk -> middleware -> request to api -> response from api -> dispatch -> reducer in the store -> update state -> update UI

<br>

## Redux in the Real World
[Web Dev Zone](https://dzone.com/articles/real-world-reactjs-and-redux-part-1)
Middleware can help us check and see if data exists, and then call necessary actions to handle various needs for our data

<br>

## Forms in React
[Forms in React](https://reactjs.org/docs/forms.html#handling-multiple-inputs)

## Reference Links
Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. It is acceptable to provide multiple links for a single topic.  

What resource(s) did you find most helpful for this research assignment and why?
I found the React Redux documentation to be the most helpful, especially after going through the fundamentals and seeing the bigger picture of what Redux does. 


**Resource 1: Redux Application Data Flow**  
[Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-application-data-flow)  

**Resource 2: Redux Async Data Flow**    
[Redux Tutorial](https://redux.js.org/tutorials/fundamentals/part-6-async-logic#redux-async-data-flow)
