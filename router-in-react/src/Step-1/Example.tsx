import React from "react";
import { Route } from "./Router";

function Home() {
  return <div>
    <h1>Royal Icing</h1>

    <h2>You deserve a sweet. Get them delivered monthly.</h2>
  </div>
}

function About() {
  return <div>
    <h1>About Royal Icing</h1>

    <p>We have making sweets in the heart of Antarctica for seven years.</p>
  </div>
}

function Pricing() {
  return <div>
    <h1>Subscription Pricing</h1>

    <h2>Basic</h2>
    <p>$15/month</p>

    <h2>Pro</h2>
    <p>$75/month</p>

    <h2>Enterprise</h2>
    <p>$250/month</p>
  </div>
}

function PrimaryNav() {
  return <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/pricing">Pricing</a></li>
    </ul>
  </nav>
}

export function Example() {
  return <>
    <PrimaryNav />
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/pricing" component={Pricing} />
    </main>
  </>
}
