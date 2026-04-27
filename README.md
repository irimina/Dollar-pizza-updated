# Dollar Pizza Lab - React

![alt-text-includes-image-credit](kelsie-pizza-final.png)

## The Goal
Everyone knows that dollar pizza is the best deal in the city (maybe the world). In this lab we are going to finish building a website for Kelsie's Dollar Pizza shop using React.

Kelsie hired a web developer to start the website. Sadly, the developer got tired of New York City winters, moved to Thailand, and works as a full-time yoga instructor at a boutique all inclusive hotel. Kelsie can't get in contact with the developer and all she has left is the incomplete code for the website.

Our job is to complete the website for Kelsie's Dollar Pizza so it looks like the mock-up above.

## Getting Started
Clone this repository using git clone
cd into the dollar-pizza-react-final folder
npm install
npm run dev (This starts the Vite development server)
Open the local URL provided in your terminal (usually http://localhost:8000) and see what it looks like now.

## The Lab

#### 1. Navbar
To start off, we need to add a Navbar to the website. Luckily, this component has already been built. All you have to do is add it in the App.jsx file.

#### 2. Pizza
Open the file for the pizza component. It seems like the last developer made a few typos. Please edit the text so everything is spelled correctly. Also, add Kelsie's name to the text as well - you can also use your own name instead if you want. 

#### 3. Pizza CSS
Open the CSS file that is associated with the pizza component (there might be a clue at the top of the file where to find it).
Edit the css so that the font is the correct size and centered properly.

The same must be done in the css file for the Menu component. Find the css file associated with the Menu component and edit the style so it looks like the mock-up.

#### 4. Text
It looks like the menu items were all just copied over! Please edit the text for each of the components associated with the different slices. Make sure the title, price, and description are correct.
Also, make sure the correct image is being imported at the top of the file.

#### 5. Hawaiian
Where is the Hawaiian slice? Please add it to the menu as well.

>Hint: Don't forget that each component must be imported at the start of the file.

#### 6. BBQ
It looks like our yoga instructor web developer completely forgot write the most of the BBQ Chicken component. Please complete the component and then put it onto the menu.

## Extension (required)
Create a whole new component on your own. Kelsie would like a **Footer** for the website that has the address and phone number for her pizza shop. Please create a Footer component and add it to the website. The store address is 555 Time Square, NY, NY 10000 and the phone number is (212) 555 5555.

## 7 Technically, our app should function well but there are a couple of things we need to fix in order to follow the best practices which is we need to do the following two things:

- We should use PascalCase so we can stay organized. Rename all your component files to start with a Capital Letter (e.g., Menu.jsx, Pizza.jsx, BBQ.jsx)."
- You will need to will need to update the import lines. For example:  Old: import Pepperoni from './pepperoni'; and new should be New: import Pepperoni from './Pepperoni';
- Pay attention to the CSS file imports so they match the new names
