Component/state structure practice with Jonas Schmedtmann.

# Splitting a React UI into components.

## Component size matters

* - Start by sorting them from smallest to largest where you can (or, top to bottom, outside in, depending on how you look at it).
* - If a component all of a sudden has 10-15 pieces of state/props to manage, it's probably too big and should be broken up. **
* - Big components cannot easily be reused.
* - One large component is hard to understand if it contains too many lines of code.

- On the flip side, you don't break up EVERYTHING into a component, it's just not necessary and creates a code base that is way too abstracted, or hidden from the developer.



###  4 Criteria for splitting a UI into components: 

1. **Logical separation of content/layout** - Does the component contain pieces of content or layout that 'don't belong together'? (if so, you might need a new component)

2. **Reusability** - Is it possible to reuse part of the component? Do you want or need to reuse it?
    - **Maintainability** - How easy will you maintain this component in future changes and updates?

3. **Responsibilities/complexity**
    - Is the component doing too many different things?
    - Does the component rely on too many props?
    - Does the compponent have too many pieces of state and/or effects?
    - Is the code, and JSX, too complex/confusing?

4. **Personal coding style!** - Some people work better with smaller compoents, some with larger ones.


## When to create a new component?

1. Review the 4 criteria above.
2. Start with a relatively big component, then split it into smaller compoents as necessary.
    - If you're not sure if a component is too big, ask yourself: "How many pieces of state/props does it have?"

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
