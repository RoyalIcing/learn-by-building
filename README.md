# Learn by Building

Modern React with hooks, TypeScript, CSS — if you want to learn these you’ll find educational projects here. Build them yourself step-by-step.

## Router in React

First learn how to build a `<Router>` component a la [react-router](https://reacttraining.com/react-router). Then learn about the `popstate` event and the `History` APIs, and creating a `<Link>` component. Finally, we will look at pattern matching in route paths, and query variables.

```tsx
function App() {
  return <>
    <PrimaryNav />
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/pricing" component={Pricing} />
    </main>
  </>
}
```