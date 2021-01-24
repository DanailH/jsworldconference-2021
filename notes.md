Tech talk notes:

- useContext - Accepts a context object and returns current context value. Triggers a re-render next time the nearest MyContext.Provider updates.


Intro - 10 min (6 min speaking, 2-3 min examples):

Hi everyone, first of all, thank you for joining this session. My name is Danail and I am part of the core team of an open-source project - Material-UI. To give you some stats about MUI - on a daily basis we have over X downloads and a total of X stars on GitHub. Now that I got your attention let's start.

What we will be talking about today is how to use React Context to create reusable components that are more developer-friendly and allow for a more seamless extendibility. I know that probably most of you already know about Context in React and I for sure if you use React you are already using Context in some form or another.

So let’s begin! Before we jump into the code and the technical part of the talk lets first examine the problem we are actually trying to solve.
If you’ve ever used React you also used props, right, and if you ever created a React component that was meant to be reused you probably had some specific logic based on the props value that that component receives.
A fairly common example would be a button component. In a button component, you would probably have props like size, colour, type, label, some sort of event handler like onClick and others depending on your use case. Now, most of those props are intended to be passed from the direct parent when you use the button component, but there are some cases where we would probably need to pass down props to our button through multiple levels. One example would be the colour and for instance. If we have a theme applied to our project that would usually be set on the top level and then we would want all our components to use that theme. So in our button example if we take to colour for example we would need to get it from the theme and then pass it all the way down to where our button component is being used. Now that is what is called property drilling and it is not only tedious but it can result in hard to maintain codebase. Now some would say that this is easily solvable by moving the theme into a module and then loading that module in the button directly but what if we want to have the theme set dynamically, like dark mode or some other case? Don’t get me wrong, there is nothing wrong with passing props around, in fact, the default way of working with React is by passing props. But in our example, that may not be the best solution.
Now if we want to take a bit more complex example that is more relevant to this talk - imagine we want to create a tabs component, but not just any old tabs component, no no we want the developers using our tabs component to be able to add or remove tabs from it, change tabs programmatically but still really on the tabs to manage the state. Basically, keep the core functionality but extend it so that it covers their use case.

Ok now that we’ve covered the default approach, the problem and what we will be aiming to solve let’s look at what React Context actually is. If you look at the definition in the official React docs it says that: “Context provides a way to pass data through the component tree without having to pass props down manually at every level”. Now, this sounds like exactly what we would need in order to achieve our use case. The official context API is available since React v16.3.0 altho there is an old context API prior to that version. In this talk, we will be using the current stable context API. Now if we look at what context is aiming to do is to basically allow us to share data between components without the need to explicitly pass that that a via props through every level of the tree. In the case of our toolbar or tabs component - it will allow is to structure the component in such a way that part of the subtree can be replaced with a custom component that can use a predefined public API that is coming out of our context. That sounds like it's complicated but it really isn’t (EXAMPLE TIME).
Now that we have some understanding about what React Context lets dive into some practical code and see how we can use it to rework our tabs component.


Main part - 15 min (3 min speaking, 2 min demo):

Alright at this point some will say “Talk is cheap, show me the code” so enough talking, let’s jump into a practice example. Earlier I mentioned that a potential component to which we can apply the Context solution is a Tabs component. Let’s examine what we want and start implementing it. Lets review the requirements:
- We want the default component to behave as any normal tabs component,
- We want easy out of the box adoption,
- We want some extendibility out of the box,
- And the important part - we want to be able to compose our own tabs component via using custom components that we already have but still benefit from the Tabs API and state management so that we don’t have to code everything ourselves.

Now, most of those requirements (actually all of them with the exception of the last one) can be achieved using the conventional method of writing UI components in React - via using normal props that provide different behaviour based on their value. Now you can argue that even the last one can be done via having a prop where the developer that is using our component can provide their own component that we then inject in a specific spot inside our Tabs component and essentially “swap” our internal component with theirs. The problem with this approach is although it is valid the developer using our component is still locked into our interpretation of what the final structure will be. What that means is that they can’t for example move our tabs on the side, or add an additional section in-between the tabs headers and the tabs content or for example, make the tabs sticky and the content long. In addition, if we had all the previous requirements and after developing our Tabs component the last requirement was added that would mean that we would have to refactor our component which may lead to breaking changes - and no one likes those right.

Now, due to the time restriction we will implement a subset of the Tabs component features. In practice, such a solution would require dozens of hours to reach the high-quality bar a real production ready component will require. So to keep the example short, we will focus on solving the following:
- To have the ability to change tabs,
- To have the ability to define the active tab,
- To be able to compose your own Tabs component.
Keep in mind that when you add the requirement for accessibility in the mix things start to get  hairy.

// HERE GOES THE CODE EXPLANATION

Ok so now that we have to code let’s check the demo. First let’s see how it works out of the box and make some basic alterations using the provided props (DEMO).
Cool, now that we know it works as a normal Tabs component lets check if what we did with the Context will allow me to compose my own Tabs component (DEMO).
Great it works!


Closing - 6 min (3 min recap, 2 min MUI and self promo):

So lets do a recap of what we did (fill in once the MAIN PART is done) (3 min)

With regards to whether this is a practical approach and if It is being used - you can check the Tabs component in Material-UI core repo. It uses exactly the same approach with the providers and the context that allows for the custom component to alter the state of the subtree. In addition, the DataGrid and the xGrid (which is part of the enterprise version) uses the same approach. This allows us to have high extendibility so that developers can provide their own UI components to achieve their set of requirements. Last but not least React Router uses context as well to provide the Router params to any component that is under the Router provider.

In closing, I want to say that there is a time and place for Context and that you shouldn’t use it every time a need to share state occurs. Depending on the need different state management may be more appropriate. Also, avoid setting global Context on the whole app (with some few exceptions) and keep the state and API in separate contexts, there may be a case where you would need to provide only one of them.

Last but not least, then you all for joining. Hope the talk was interesting. You can follow me on Twitter (@danail_h) or GitHub (@DanailH). In addition, if you use Material-UI we are always opened for feedback and encourage contributions from the community.

Thank you again and have a nice day!