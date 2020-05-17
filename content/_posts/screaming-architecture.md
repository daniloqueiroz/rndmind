---
title: Screaming Architecture
updated: 2020-04-25 19:57:11
tags:
 - software design
 - clean architecture
---

First of all, let me make this clear, I'm a fan of the **Clean Architecture**.

That said, clean architecture isn't really an architecture - it's a concept, a set of principles that good
architectures share.
Why it's important to call this out? Well, remember the idea of screaming architecture? 
The idea behind the screaming architecture is that the architecture should tell you the intent of that 'building'.
The clean architecture isn't about the intent of your software, but about the intent of the pieces your software
is built of.

Let me step back for a second, so I can explain where I'm coming from.
Have you ever tried to search for [clean architecture on github](https://github.com/search?q=clean+architecture)?
There're dozens of examples of "clean architecture with \<your favorite language\>". Some of them take it right, but on
the vast majority of them what you see on the top-level are packages like _usecases_, _entities_ , _adapters_, or
equivalents.
I ask yourself, how is that different from a rails app that on the top-level has _models_, _controllers_? How is that
screaming the intent of the application.
The way I see it is like having a blueprint which all the doors are in one room and all the windows are in another.
Use cases, entities and adapters are conceptual abstractions, are the building blocks of your application but isn't your
application. Use cases, entities and adapters, per se, don't constitute a solution to a problem.

Your top-level should tell an adventurer what it's your software about. If it's an e-commerce you are going to have
things like _cart_, _orders_, _inventory_.
I believe the best way to achieve this is to start by focusing on your problem domain aspects. Forget about the
database, forget about the web, forget about any framework. Tell me what problem you are trying to solve.
As you continue building your application, you keep those clean architecture concepts in your head. Do you need some
sort of persistence for the products on your catalog? Cool, define your repository interface, right there, side by side
to all other catalog things, where it belongs. Need a place for the policies around how to calculate the final price of
an order? Well, there should be a use case for that right in the orders package.
Sure at some point you're going to need a place for the things that aren't part of your domain space - your repositories
implementation, your REST and GRPC APIs. You might end up with a package called adapter(1), but that is OK, for the
most part, when I take a glance at your code I know what it's about.
 
(1) I usually call it drivers, just 'cause I like to get inspiration from OS architecture when building my apps.
