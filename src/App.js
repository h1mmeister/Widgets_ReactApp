/* eslint-disable */
import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React ?",
    content:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications",
  },
  {
    title: "What is JavaScript?",
    content:
      "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
