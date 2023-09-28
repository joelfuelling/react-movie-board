<br />

<details>
<summary> Do you want to run the app locally? Select <span class="green-13">here</span> for instructions!! 🏎️ 🚀</summary>

## Prerequisites

<style>
   .green-22px {
      color: lightgreen;
      font-size: 22px;
   }
   .green-13 {
      color: lightgreen;
      font-size: 13;
   }
   .red {
      color: red;
      font-size: 22px;
   }
   .yellow {
      color: yellow;
      font-size: 22px;
   }
   .big-font {
      font-size: 40px;
   }
</style>

- Node.js
- npm or yarn (npm is included with Node.js)
- Git

## Create and Initialize the Project Folder

To create a new project folder and navigate into it, run the following commands:

```sh
mkdir project-name
cd project-name
```

## Clone the Repository

To get started, you need to clone the repository to your local machine.

```sh
git clone https://github.com/joelfuelling/react-movie-board.git
```

Then, cd into the folder of the newly created app.

```sh
cd react-movie-board
```

## Dependencies

Navigate to your project directory (see step above this one) and run the following command to install the necessary dependencies:

Using npm:

```sh
npm install
```

Or, using yarn:

```sh
yarn
```

<br />
<br />
Your app should now be running on http://localhost:3000 or another port if you have configured it differently.
<br />
<br />
<br />
</details>

<br /> 
<div class="big-font">⚛️ Splitting a React UI into components ⚛️</div>

<br />

# 1. Component size matters

Start by sorting them from smallest to largest where you can (or, top to bottom, outside in, depending on how you look at it).

- If a component all of a sudden has 10-15 pieces of state/props to manage, it's probably too big and should be broken up.
- BIG components cannot easily be reused.
  - One large component is hard to understand if it contains too many lines of code.

* On the flip side, you don't break up EVERYTHING into a component, it's just not necessary and creates a code base that is way too abstracted, or hidden from the developer.

<br />
<br />

#

# 2. Four Criteria for splitting a UI into components:

1. **Logical separation of content/layout** - Does the component contain pieces of content or layout that 'don't belong together'? (if so, you might need a new component)

2. **Reusability** - Is it possible to reuse part of the component? Do you want or need to reuse it?

   - **Maintainability** - How easy will you maintain this component in future changes and updates?

3. **Responsibilities/complexity**

   - Is the component doing too many different things?
   - Does the component rely on too many props?
   - Does the compponent have too many pieces of state and/or effects?
   - Is the code, and JSX, too complex/confusing?

4. **Personal coding style!** - Some people work better with smaller compoents, some with larger ones.

<br />
<br />
<br />

#

# 3. When to create a new component?

Review the 4 criteria above. Start with a relatively big component, then split it into smaller compoents as necessary.

If you're not sure if a component is too big, ask yourself: "How many pieces of state/props does it have?"

## General Guidelines:

1. Creating a new compoent creates a new abstraction.
   - More abstractions require more mental energy to switch back and forth between components. Don't create new components too early.
2. Name a component according to what it does or what it displays. Use long names if needed!

3. > [!WARNING]  
   > <span class="red">Never declare a new component inside another component.</span>
4. Co-locate related components inside the same file.
5. Many different size components will exist in the app, that's normal.

### For Exmaple:

- A BNB page would have the Superhost tag, rare find, favorite selector, and images as small components. But, the Rental unit information, reviews, and price information would be medium/larger due to calculatoins and interdependencies that would be required for those components.

- The whole "page" component would be very large, likely used once, and generally as the non-reusable component to store reusable components inside.

- Small components are generally reusable, large ones are not... Different degrees

<br />
<br />
<br />

# 4. Component Categories

1. Stateless/Presentational componenes

   - No sate (logo, movie component, numResults, etc.)
   - These are the most common components. They are just concerned with rendering UI and don't have any state of their own.

2. Stateful Components

   - Does have state
   - Can be used in other components

3. Structural Components
   - "Pages", "Layouts", or "screens" of the app.
   - Result of composition
   - Can be huge and non-reusable (but don't have to)

<br />
<br />

# 5. Prop Drilling

Passing props through components to be used in others... Can quickly get messy, which is _why_ we try to store state as locally as possible. In this way we practice separation of concerns and avoid repeating code.
<br />
<br />
<br />

# 6. Children

- Allows components to be more reusable by passing 'chidlren' as the content between the opening and closing tag of the component.
- Components DO NOT NEED to know the contents in advance.
<br /><br />
<div class="green-22px">
Do this...
</div>

```
export default function Navbar({ children }) {
return (
   <>
      <nav className="nav-bar">
      {children}
      </nav>
   </>
)}
```

<br />
<div class="red">
Instead of...
</div>

```
export default function Navbar({ movies }) {
return (
   <>
      <nav className="nav-bar">
         <Logo />
         <SearchBar />
         <NumResults movies={movies} />
      </nav>
   </>
)}
```

<br />
<br />

# 6.1 Let's use the <span span class="yellow">{children}</span> prop

Lets apply the children concept to the Main component for both the SearchedMovieList, and WatchedList since they're identical formats. We're also going to add a Box component since each list is very similar.

1. In `<Main/>`, accept `{children}` instead of `{movies}`.
2. Import the `SearchedMovieList` and `WatchedList` components to `App`.
3. Within the `App` component, within the `<Main/>` component, we'll pass the two imported components.

Now, instead of drilling `{movies}` through an unecessary number of components, we've setup the `{children}` for `Navbar`, `Button`, and `Main`, as to avoid unecessary drilling and have State (and derived variables) located as "locally", or farthest down from App, as possible.
<br />
<br />

# 6.2 Passing <span class="yellow">Elements </span>as props (instead of Children)

Instead of using children, we can use an explicity named props as an alternative, though using children is generally the way to go.

## This element can be named whatever we want!!

1. Comment out the existing `Box` componentx in `App`, then navigate to the `Box` component..
2. Instead of accepting `{children}`, accept `{element}` (_this can be called whatever_).
   - Don't forget to change children to element at the bottom of the Box component `{isOpen && element}` conditional.
3. Go back to `App` and put the components into the elements to be passed.
   <br />
   <br />

<div class="green-22px">
Do this...
</div>

```

<Main>
        <Box element={<SearchedMoviesList movies={movies} />} />
        <Box element={<WatchedMovieList />} />
</Main>
```

<div class="red">
Instead of...
</div>

```
<Box>
   <SearchedMoviesList movies={movies} />
</Box>
<Box>
   <WatchedMovieList />
</Box>
```

<br />
<br />

# 7. Star Component Construction

For this one, we're going to define our CSS as object variables to then pass in to the inline `<style/>` tag.

```
import {useState} from 'react'

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "13",
  backgroundColor: "rgb(110, 0, 220,.8)",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};
```

We're going to create the star array with an initial length of 10 using the Array.from constructor. We only need to know the index, so we leave the 'current element' argument blank using '\_'.

- This can be done to any functional argument as a general rule.
  </br>
  </br>
  </br>

```
export default function StarRating() {
  const [rating, setRating] = useState(null);
  return (
    <>
      <div style={containerStyle}>
        <div style={starContainerStyle}>
          {Array.from({ length: 10 }, (_, i) => (
            <span style={textStyle}>S{i + 1}</span>
          ))}
        </div>
        <p>10</p>
      </div>
    </>
  );
}
```

<br />

<h1> What if we had to use the component twice and pass a difference value in, like below?</h1>

```
<StarRating maxRating={5} />
<StarRating maxRating={10} />
```

Well, because we destructure props when we pass them we can redeclare, or set a "default" value for it's use in this component...

```
export default function StarRating({ maxRating }) {
  maxRating = 10;
  const [rating, setRating] = useState(null);
  return (
    <>
      <div style={containerStyle}>
        <div style={starContainerStyle}>
          {Array.from({ length: maxRating }, (cur, i) => (
            <span style={textStyle}>S{i + 1}</span>
          ))}
        </div>
  ...
}
```

We've added an onClick to setRating when a Star is clicked, and to alter the tempRating (ie, the hovered state) to change dynamically we're using onMouseEnter, and onMouseExit to change state based off the function names as the event.

We've then added conditioals "" || "" || "" to check first if there is a tempRating, then check for a Rating, then default to "". This way, while we're "inside" the component the tempRating is displayed in priority over teh current 'rating', and when we "leave" the component the 'rating' state takes precedence since there is no longer a 'tempRating'

```
export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRatingClick(rating) {
    setRating(rating);
  }

  return (
    <>
      <div style={containerStyle}>
        <div style={starContainerStyle}>
          {Array.from({ length: maxRating }, (cur, i) => (
            <Star
              key={i}
              onRateClick={() => handleRatingClick(i + 1)}
              onRateEnter={() => setTempRating(i + 1)}
              onRateExit={() => setTempRating(0)}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            />
          ))}
        </div>
        <p style={textStyle}>{tempRating || rating || ""}</p>
      </div>
    </>
  );
}
```

<br />
<br />
<br />

# 8. Props as a component API

As a component creator, we choose what public interface the user interacts with. We can expose as much or as little of the API to the consumer. Or, how much of the "abstracted code" will they be able to interact with.

No matter how you approach it, it's always a good idea to think of a <span class="green-13">creator</span> and a <span class="green-13">consumer</span> of the component.

For Example: let's say we're making a weather component. What if we only had 1 prop, the location? OK, that's fine (I guess?) but it won't allow enough of the code to be used in order to provide value. Too many props on the other hand though would expose too much complexity and make the API hard to use.

### Too little Props

- Not flexible enough
- Might not be useful

### Too many props

- Too hard to use
- Exposing too much complexity
- Hard-to-write code
- Provide good default values

<br />
<br />
<br />

# 9. Prop Types

Specify the _type_ of value we expect the user to pass in for each prop. maxRating really must be a number, and nothing else. This is type checking in it's simplest form. use TypeScript if you care more about this.

React has a built in propTypes we can use for this example, though we won't be using it for the rest of the course.

### Declaring Prop Types

1st, import PropTypes into the file.

```
import PropTypes from 'prop-types'
```

To set the types...

1. Setup the Component.propTypes object equal to an object containing the declared props.
2. Declare each types using 'PropTypes.' then the data type.
3. Add additional chaining argument (.isRequired, etc.) as necessary.

```
StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  messages: PropTypes.arrayOf(
PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};
```
