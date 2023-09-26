<style>
   .green {
      color: lightgreen;
      font-size: 22px;
   }
   .red {
      color: red;
      font-size: 22px;
   }
</style>
<br />

# ⚛️ Splitting a React UI into components.

<h1>Component size matters</h1>

Start by sorting them from smallest to largest where you can (or, top to bottom, outside in, depending on how you look at it).

- If a component all of a sudden has 10-15 pieces of state/props to manage, it's probably too big and should be broken up.
- Big components cannot easily be reused.
- One large component is hard to understand if it contains too many lines of code.

* On the flip side, you don't break up EVERYTHING into a component, it's just not necessary and creates a code base that is way too abstracted, or hidden from the developer.

<br />

## There are 4 Criteria for splitting a UI into components:

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

# When to create a new component?

Review the 4 criteria above. Start with a relatively big component, then split it into smaller compoents as necessary.

If you're not sure if a component is too big, ask yourself: "How many pieces of state/props does it have?"

## General Guidelines:

1. Creating a new compoent creates a new abstraction.
   - More abstractions require more mental energy to switch back and forth between components. Don't create new components too early.
2. Name a component according to what it does or what it displays. Use long names if needed!
3. Never declare a new component inside another component.
4. Co-locate related components inside the same file.
5. Many different size components will exist in the app, that's normal.

### For Exmaple:

- A BNB page would have the Superhost tag, rare find, favorite selector, and images as small components. But, the Rental unit information, reviews, and price information would be medium/larger due to calculatoins and interdependencies that would be required for those components.

- The whole "page" component would be very large, likely used once, and generally as the non-reusable component to store reusable components inside.

- Small components are generally reusable, large ones are not... Different degrees

<br />
<br />
<br />

# Component Categories

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
<br />

# Prop Drilling

Passing props through components to be used in others... Can quickly get messy, which is _why_ we try to store state as locally as
<br />
<br />
<br />

# Children

- Allows components to be more reusable by passing 'chidlren' as the content between the opening and closing tag of the component.
- Components DO NOT NEED to know the contents in advance.
<br /><br />
<div class="green">
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

Lets apply the children concept to the Main component for both the SearchedMovieList, and WatchedList since they're identical formats. We're also going to add a Box component since each list is very similar.

1. In 'Main', accept {children} instead of {movies}.
2. Import the SearchedMovieLsit and WatchedList components to App.
3. Within the App component, within the main component, we'll pass the two imported components.

Now, instead of drilling {movies} through an unecessary number of components, we've setup the {children} for Navbar, Button, and Main, as to avoid unecessary drilling and have State (and derived variables) located as "locally", or farthest down from App, as possible.

## Passing <span style="color: yellow">Elements </span>as props (instead of Children)

Instead of using children, we can use an explicity names prop as an alternative.

## This element can be named whatever we want!!</span>

1. Comment out the existing 'box' componentx in App, then navigate to the 'box' component..
2. Instead of accepting {children}, accept {element} (_this can be called whatever_).
   - Don't forget to change children to element at the bottom of the Box component {isOpen && element} conditional.
3. Go back to App and put the components into the elements to be passed.
   <br />
   <br />

<div class="green">
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
