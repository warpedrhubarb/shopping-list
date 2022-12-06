# Shopping List

![Example Screenshot](https://user-images.githubusercontent.com/7108262/205805577-be696e06-eefb-463a-88f6-c4f7c56774db.png)

## Description

Nice and straightforward shopping list React application. 

The state is implemented with React Hooks. I initially considered using Redux, but it seemed redundant for such a simple application.

I have also considered using validation libraries such as <a href="https://github.com/jquense/yup">yup<a>, but since there are pretty few validation conditions needed, I've decided to implement a custom validation utility instead. 

Product Amount input fields `type` attributes are set to `"text"` because using `type="number"` has several UX disadvantages e.g. detailed <a href="https://stackoverflow.blog/2022/09/15/why-the-number-input-is-the-worst-input/">in this article<a>.

<a href="https://www.npmjs.com/package/uuid">uuid library<a> is used for generating unique key identifiers required by React for list elements.

<a href="https://getbootstrap.com/">Bootstrap<a> is used for component styling. 

<a href="https://fontawesome.com/">FontAwesome<a> is used for the navbar icon.


## Installation

Clone the project and run

```npm install```

## Usage

```npm start```

## Demo

<a href="https://shopping-list-warpedrhubarb.vercel.app/">https://shopping-list-warpedrhubarb.vercel.app/<a>
