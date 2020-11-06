Time: Mon Oct 26 2020 11:25:01 GMT-0300
Title: Design by Contract - Liskov Substitution Principle dive-in
Tags:
- programming
- architecture
- javascript
- typescript
- ase
--/--/--
# Design by Contract

Most people have heard of SOLID, which is a set of good practices when it comes to designing software. The L in it, which stands for Liskov-substitution principle, tangents what is known as Design by Contract.

Here I will provide my understanding about it, in a way that shuold be easy enough for easy understanding. Let's break it down this way:

1. What it is
2. The metaphor
3. Designing

## What is Design by Contract?

It's an approach to designing software.
It was coined by Bertrand Meyer (Eiffel Creator) in 1986.

In it, you assume every relation between every component of a system relates between each other via means of a contract - like a customer and a business do.

The client will always meet the preconditions established by a server component.

## The Metaphor

Imagine you have a deal going on between a supplier and a company.
In order to firm the deal, they agree on a contract, that defines:

* The supplier must provide a certain product (**obligation**), and it's expected that the customer pays its price (a **benefit**)
* The customer must pay a fee (**obligation**), and is entitled to get its product (**benefit**)
* Both parties must satisfy some **obligations** referent to all contracts (due to law and regulations)

So, this is what should happen in software too:

* **Precondition**: The callee expects the caller to fulfill certain conditions (obligation; might be correctness of context/arguments, for example), in order to not to have to handle cases outside what's expected (benefit)
* **Postcondition**: Guarantee the correct outcome of a method (an obligation to the callee, and a benefit to the caller)
* **Invariant**: The class invariant[1] should be preserved

This basically derives from a Hoare triple:

* What does the contract expect?
* What does the contract guarantee?
* What does the contract maintain?

## Designing

In the same way we review and audit a contract, we do it in software as well. DbC ensure a software is correct when both parties adhere to the contract.
 
Even though languages have ways to do assertions, DbC considers these contracts to be so crucial to software correctness that it should be part of the design process.

DbC advocates writing assertions first, then code later (*TDD feelings here?*). Assertions may be a design document, code comments or a test suite.

Contracts are as granular as a method level, establishing invariants, side-effects, returns types and what they mean, possible errors, acceptable and unnacceptable arguments, pre/post-conditions, etc.

Inherting subclasses are allowed to weaken preconditions (but not strenghten them), and strenghten post-conditions and invariants (but never weaken them). This is very close to behavioral subtyping. [2]

Also, DbC implies that a "supplier" (callee) should not try to verify that the contract is being followed correctly - it should "fail hard". This is a practice known as Offensive Programming (low error tolerance; opposed to defensive programming, which tries to soften errors effects - in that scenario, a supplier would need to figure out how to handle possible errors).

## In Practice - Coding

Some languages provide support out of the box, such as Eiffel, Closure, Kotlin, Scala, and others.

If your preferred language (e.g. JS) doesn't provide it, still there's third party libs that can provide that.

[In this repository](TBD), I've done an implementation using `babel-plugin-contracts`, which runs as a babel plugin (should be easy to implement on a project), and typescript.
As you can see, I experimented with using Decorators for making such assertions, and I found that they did work well and provided easy to read code.

**It's important that you do not ship your productive code with DbC assertions, as this may cause unnecessary overheads.**

[1] Invariant is a mathematical concept, but, for what it matters, it's an unchangeable assumption/property. A class invariant is this constant, unchangeable assumption or property, to a class. It's bound to it's business context - you can't have negative days in a calendar.

[2] Behavioral Subtyping is a type of subtyping relation (strong), which intends to bring semantic interoperability between types of a given hierarchy - a class may be replaced by its subtypes without altering correctness (adhesion of an algorithm to a spec) of a software program.


Hope this is useful for someone. Otherwise, as they say, teaching is the best way of learning.
