# Close.io Solution

### I made a mistake, and I want to apologize.

My last solution was hurried, and my application was declined for obvious reasons.

I failed to address one of the key performance problems in the project.  And for that I sincerely apologize.

But I can't just apologize and not present a better solution.  

So that's what I've created here.  A *much improved* solution.

Please have a look - I'd love your thoughts, especially in the context of an interview 🙂.

## The Live Solution

[👉👉 View the live solution here. 👈👈](https://radiant-malabi-0147b2.netlify.app/)

## Thoughts about the solution

### Typescript usage

I chose to implement Typescript on this project to more closely simulate my normal working environment and to allow me another bug-reducing mechanism.  Anecdotally I find that Typescript alerts me to bugs before they make it into production on a regular basis, so Typescript usage just makes sense.  It also has an amazing amount of community support and has been proven [through research](https://earlbarr.com/publications/typestudy.pdf) to eliminate a specific class of bugs in code.  For those reasons I'm a huge advocate of using Typescript in projects whenever possible.

**On a side note:** There are other, better type-checked languages that can compile to Javascript ([ReScript](https://rescript-lang.org/) comes to mind here).  I've experimented with this language before, however, its lack of community support and some performance-degrading implementations have led me to look elsewhere.  I'd still love to have a conversation about functional Javascript and why it's great, even if it isn't supported as well as I'd like!

### Performance concerns

Something I quite honestly missed in my first submission (albeit, it was a somewhat hurried attempt) was that the individual list items were all rerendering any time I selected a particular list item.  In this attempt, I've corrected that a couple of ways.  The first enhancement was to implement [`memo`](https://react.dev/reference/react/memo) to reduce rerenders when a component's props hadn't changed.  I combined that with passing necessary information via data attributes as suggested by the official React docs [here](https://legacy.reactjs.org/docs/faq-functions.html#example-passing-params-using-data-attributes) so that I could memoize the click handler as well.  After making this update and using React Profiler to verify the results, I'm happy to say that the large list rendering is no longer causing any performance issues when changes are made to a single element.

### Styling

I felt the use of the [BEM methodology](https://en.bem.info/methodology/) is a great choice for naming classes and I have used it throughout my career.  Although I know this is only a small project, *at scale* components named using *only* BEM-style names are susceptible to class naming collision. That being said, I've impelemented CSS Modules and the [`clsx`](https://www.npmjs.com/package/clsx) library (the only library I used outside of React and ReactDOM).  I think this is a big step in the right direction and strikes a great balance between usable, BEM-style class names that are still collision resistant and scale well with the project.  On a bigger project I may consider using TailwindCSS (one of my favorite libraries out there) for even more efficient CSS.  (Why do I think Tailwind is even more efficient?  Just ask - I'd love to chat about it.)

### Bundling

Bundlers bring a lot of baggage with them.  I'm sure anyone who has been in the frontend world for long can sympathize with the struggles to get an optimized production bundle from Webpack 3.  In this project I chose to keep it simple and use the Parcel bundler.  This isn't what I would have chosen for an enterprise-level project because of flexibility concerns, but it does a great job of giving me the tools I need (React bundling, PostCSS, CSS Modules) out of the box, a great Hot Module Reloading system, a built-in web server, and then it just steps out of the way like it's not even there.  That made it a no-brainer for this particular project.

### Unit testing

In order to make this project more true to what I would expect a well-implemented solution to contain, I've also added tests for each of the components within the project using [jest](https://jestjs.io/) and [enzyme](https://enzymejs.github.io/enzyme/).  These, along with some customization to allow testing to proceed outside of the confines of the Parcel bundler (namely a custom babel and jest config) allowed me to implement these tests without issue.

### Why forward refs in the components if I wasn't using refs anywhere?

I've built my fair share of React apps, and I would say that in almost every case there was a future issue that required me to forward refs to a component I'd already built.  After going through that exercise enough times I've learned my lesson and now in any *component* that I build where I don't know how it will be used in the future.  Just good practice in my book without any penalties that I'm aware of.

### Why pass through the className prop in components if it's not used?

This is the learnings from another mistake I've seen made way too often - components being built without the ability to pass through the className prop.  This is removing functionality that should be there for any component ever built.  The developer using the component should be able to decide if they'd like to add a className at the very least to the top level of the component.  This is another thing that makes good, future-proof code in my opinion.

### Styling the selected item

This is such a little thing, but I thought for this project it was important to add styling that didn't disturb the positioning of the elements but also left the elements styled much like they were originally.  This led me to use `box-shadow` as my selected style approach, which I thought worked rather well.

## Conclusion

That's about it.  I'd love to chat!  Feel free to reach out to me through the details in my application (since I'm not too keen on posting my email / phone on a public Github README)