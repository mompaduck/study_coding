## Composition over Inheritance

https://www.youtube.com/watch?v=wfMtDGfHWpA

GREAT explanation of HOCs
https://www.richardkotze.com/coding/understanding-higher-order-components

React docs on HOCs
https://reactjs.org/docs/higher-order-components.html

V School writeup on HOCs
https://coursework.vschool.io/hocs/

# Context consulsion

## Caveats

- Don't use context just to avid prop dirlling a layer or two down.
  -- React suggests not using it to avoid prop drilling at all in certain circumstances.
  Before You Use Context [https://reactjs.org/docs/context.html#before-you-use-context]

- Don't use context for state that should just be kept locally (e.g. forms)
- Wrap the Provider around the lowest common parent in the tree
- Passing object as value, whatch performance and refactor if necessary.

# Hook

- "Hook into" state and lifecycle methods of components without using classes.
- Only use functional components across the board.
- Improve readability and organization of components.
