A parent component is able to pass its state onto children components. True or false?      

<details><summary><b>Answer</b></summary>
<p>

#### Answer: `True`  

That's right! A child component will receive the data via properties, passing state that's set in a parent stateful component.      

</p>
</details>

---



Which of the following statements about data flow in React are correct?

State data is data inside the component, and the component can control and mutate the data.     

The props data is data outside the component and cannot mutate. 

<details><summary><b>Answer</b></summary>
<p>

#### Answer

That’s right! State data is a component’s internal data, which it can control and mutate. Props data is outside of the component and is immutable, meaning it cannot change.

</p>
</details>

---

Which of the following is true about the map() method in JavaScript. 
Select all that apply.


The map() method is a collection of elements.  

The map() method returns a new array.  

The map() method is useful for handling third party data.  

The map() method is a transformation operation.  


<details><summary><b>Answer</b></summary>
<p>

#### Correct


The map() method returns a new array.

> That’s correct. When using the map() method, you will need to define a new variable, as it always returns a new array.

The map() method is useful for handling third party data.  

>  That’s correct. Using the map() method in JavaScript to display data fetched from a third party or external provider differently in your app is a common use case of the map() method.

The map() method is a transformation operation.

> That’s correct. The map() method in JavaScript is used to transform lists of data.


Not quite

The map() method is a collection of elements.

> Not quite. A list is a simple collection of elements, which translated to JavaScript terms represents an array.

</p>
</details>

---


When you are working with lists in JSX, you can return a React component. What is the purpose of curly braces in this process? 

To access the content of the variable that represents your list item.  

To store the result of the transformation being performed.  

To loop through the array of initial data.  

To access the needed properties from the initial data.  


<details><summary><b>Answer</b></summary>
<p>

#### Correct

To access the content of the variable that represents your list item.
> That’s correct. When a JSX transformation will be part of the render method of components, you need to use curly braces to wrap your dynamic data so it can be accessed.

</p>
</details>

---


When chaining the three array operators required to complete the exercise, map, filter and sort; in which order should they be applied to props.data? Remember that props.data contains an array of dessert objects.

`Sort, filter, map.` 

`Map, filter, sort.` 

`Filter, sort, map.` 

<details><summary><b>Answer</b></summary>
<p>

#### Correct

`Filter, sort, map.` 
> That's correct, `filter` should go before `sort` since it returns a new array, making sure a copy of `props.data` is created before doing the sorting, which is a mutative operation. `Map` should be always the last, to transform the item into the final React Element that should be rendered.


Incorrect

`Map, filter, sort.` 
> Not quite, if using map as the first operator to transform the item into a React element, filter and sort operators will lose the original desserts data needed to perform the filtering and sorting operations.

</p>
</details>

---



