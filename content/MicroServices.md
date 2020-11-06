Time: Sun Oct 04 2020 20:07:12 GMT-0300
Title: Talking about Micro-services for a while
Tags:
- programming
- architecture
- ase
--/--/--
I planned on building this blog to get used to writing more, as I apparently have a difficulty doing so. I think the fact that I only have written when I coded may back this up a little bit. So, let's do something different, and write about something that's kind of a hot-word nowadays.

Yes, I'm talking about Micro-services.

As I don't have yet my go-to writing format, I'm going to experiment with it a little bit and see what works and what doesn't.

## Basics

I think that, first, in order to understand what a Micro-service is, we must know what does it address.
Imagine that company A has a product that allows for, let's say, hotel booking. You can see which rooms are free, you can book rooms, cancel bookings, and manage reservations, rooms and such.

Now, the usual way of doing that, the way it has always been done, is what we call a monolith. It would turn out in a single and huge application, containing all your code (e.g. a single Node.js project, or a single Java WAR file). 
While this will work, you may face some issues with this approach. Let's ennumerate a few:

1. Changes may become difficult - specially when one must fix something in ~one part of the application.
2. Expect lenghty deploys (including start-up times)
3. Scalability may be an issue. Probably, you will end sticking up with vertical scaling (increasing memory/CPUs for that instance, for example)
4. As part of that, it may be hard to work with redundancy
5. Be prepared to stick with a specific technology stack for a while. If you decide to migrate it to another stack (let's say, if a library you use becomes deprecated), it would be a demanding process.
6. Complicated Continuous Integration scenarios (as frequent deploys can be impacted by the deploy time)
7. There _can be_ issues regarding different teams changing the same code in the application. But the most common is to have a single team working on the app, which would lead to a huge team in some scenarios, which can have its own issues.

With that in mind, _one possible solution_ is to apply a micro-services architecture.

## What is a Micro-service Architecture

A micro-service architecture is a form of designing a system's architecture in a way that its compononents are independent, collaborating, loosely coupled services. Each service, ideally, should represent a _module_ in your system based on its business context (e.g. a service for booking rooms, another for pricing, other for emitting coupons, etc.). It's almost the equivalent of having more classes instead of a single class with a single entry-point.

These services should be able to communicate between themselves, and they should be loosely coupled between each other - which means, an internal change in service A should not disrupt service B. With that, ideally, we could achieve:

1. Better testability, as each module is now smaller
2. Faster and independent deploy
3. Better scalability: easier to use horizontal scaling (e.g. adding more instances)
4. Better redundancy capabilities (due to the possibility of using horizontal scaling)
5. Better maintainability in general
6. Theoretically, makes it easier to split responsibilities between teams (e.g. team A is responsible for service A)

Food for thought: You don't need to have your code separated, if you don't like it. You can use a mono-repo for that, as it has it's own advantages. More on that in another post.

## How-to define

There's no "written in stone" guide to set up the granularity which you will use to separate what goes in each service.
In my personal opinion, this is much like the Single Responsibility Principle we see in SOLID (I will make sure to talk about it in another post), where a class/module should only have one responsibility (and it should do it well). 

For example, a room booking service doesn't need to know how to register a new guest in the system, but there can be discussions whether Pricing belongs to Room Booking or not. I'm not going to delve inside this question, but there's a balance that should be achieved: We need to be careful so that a module doesn't end with too much responsibility, but, sometimes, we don't have enough information/knowledge in order to know how a certain abstraction will develop. In doubt, don't over-engineer, as de-engineering it later may be more costly than simply refactoring.

I think it's important we tackle Domain Driven Design a little bit here as well, as it's *very* important for that matter.

## What is DDD?

First things first:

#### What is a domain?

A domain is the subject area on which the application is being developed. In our previous examples, "hotels" is a domain. However, this is also granular, and we can have an application delving into various domains (e.g. automotive and sales). We could also say, "booking" and "guests", as inner contexts - sub-domains - to "hotels".

A model is a ubiquitous language that can be used to communicate between the development team and the domain experts. It lays the conceptual foundation for your system that must be understandable for these two actors.

Bigger models can be specially hard to build as a single and unified model - and for that, we should consider the "bound context" concept too.

#### Bound Context

A bound context is a technique in DDD that aims to break down a model into various bounded context that may or may not share modules/entities. In a hotel, for example, both `room` and `guest` can be included inside a same "room booking" context. A guest, however, may be part of another context related to user management inside that system (or integration with social media, for example).

I'll link to [this post](https://martinfowler.com/bliki/BoundedContext.html) by Martin Fowler, which has a very nice example for that.

#### So, DDD...

DDD is all about writing software based on models of an underlying domain. 

Applying this to the Micro-services context, we could use these boundaries between contexts to delimit what services we're going to implement, and which entities relates to which context. 

