# Instructions 
Update this document to summarize integrative research and activity conducted this week. This should include material provided to you in this program in addition to your own independent study.    

**Note:** Be sure to add a research document to your docs folder each week to receive credit for your integrative study time. Replace LastFirst with your own last and first name. The naming convention is "R#-LastFirst.md". Replace the # symbol with the current week number.   

< br>

# Final Project 

* **RESEARCH 6 - Front-End Creation I**
* **April Vanderslice**
* **20 Feb 22**

<br>

## Thinking in React
Breaking down a design into components to be built with react and React's one-way data flow down the component hierarchy.

* Steps to create a library of reusable components:
    1. Draw boxes around every component and subcomponent in the design and give them all names. Use the single responsibility principle: a component should ideally only do one thing.
    2. Arrange the component names into a hierarchy. A component within another component should appear as a child in the hierarchy. The component at the top of the hiearchy should take in your data model as a prop. 
    3. Build a static version: no interactivity. Each component should only havae the render() method at this point.
    
* Identify the minimal representation of UI state (trigger changes to underlying data model). 
    * Determine props vs state:
        1. Is is passed via props? Then not state.
        2. Does it remain unchanged over time? Not state.
        3. Can it be computed based on any other state or props in the component? Not state. 
* Where should state live? Determin which component mutates or *owns* that state. 

<br>

## Folder Structure in React Apps
How to structure files for large applications built with React, especially if using some kind of state management framework like Redux which adds even more files and folders.

* React, the language, doesn't require a specific file structure, but there are patterns that can be followed:
    * Grouping by Feature or Route. For example: the `home` page would have its own folder that contains the components, tests, and styles for that route. The `lists` page would have *its* own folder with components, tests, etc. 
    * File Type Groups: Component Folder would hold all components and it could be structured using the Atomic Design pattern from Brad Frost: atoms, moelcules, organism, templates, pages. 
* Redux
    * Rails-Style: separate folder for actions, constants, reducers, containers, and components. Application is structured by the purpose that each file serves.
    * Ducks


<br>
## How ESLint Makes Me a Better React Developer
The author talks about how the lax standards in React can be nice but leaves plenty of room for unchecked errors. ES Lint helps.

* ESLint will apply angry red squiggles to code that can be written better. A lightbulb links straight to the eslint docs so you can start fixing the code. 
* Airbnb's EsLitn rules are standard.



<br>

## Reference Links
Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. It is acceptable to provide multiple links for a single topic.  

What resource(s) did you find most helpful for this research assignment and why? 
I love the Thinking in React article from the React docs. It helps a lot to be given short steps to follow to start creating components instead of trying to create them on the fly as they come to mind (how I've been doing it).


**Resource 1: Renaming Heroku Apps in the CLI**  
[Updating git remotes](https://devcenter.heroku.com/articles/renaming-apps#updating-git-remotes)  

**Resource 2: Heroku CLI**    
[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

**Resource 3: Another article on how to create a react app with a node backend**      
[react-app-node](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)




