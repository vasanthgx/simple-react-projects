
# Star Rating React Component



## Code Explanation

### Imports

```javascript
import {FaStar} from 'react-icons/fa'
import "./style.css"
import { useState } from 'react'
```
- `FaStar`: Imported from the `react-icons` library, this component represents a star icon.
- `./style.css`: This CSS file is imported to style the component.

### StarRating Component

```javascript
const StarRating = ({noOfStars = 5}) => {
```
- `StarRating`: A functional React component that receives `noOfStars` as a prop, with a default value of 5.

#### State Hooks

```javascript
const [rating, setRating] = useState(0)
const [hover, setHover] = useState(0)
```
- `rating`: State variable to store the current rating (number of stars selected).
- `setRating`: Function to update the `rating` state.
- `hover`: State variable to store the current hovered star index.
- `setHover`: Function to update the `hover` state.

#### Event Handlers

```javascript
function handleClick(index){
    setRating(index);
}
```
- `handleClick`: Sets the `rating` state to the clicked star index.

```javascript
function handleMouseEnter(index){
    setHover(index);
}
```
- `handleMouseEnter`: Sets the `hover` state to the hovered star index.

```javascript
function handleMouseLeave(){
    setHover(rating);
}
```
- `handleMouseLeave`: Resets the `hover` state to the current `rating` when the mouse leaves a star.

#### JSX Return

```javascript
return (
    <div className='star-rating'>
        {[...Array(noOfStars)].map((_, index) => {
            index += 1;
            return (
                <FaStar
                    key={index}
                    className={index <= (hover || rating) ? "active" : "inactive"}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                />
            );
        })}
    </div>
);
```
- The component returns a `div` with the class name `star-rating`.
- `Array(noOfStars)`: Creates an array with a length of `noOfStars` (default 5).
- `map((_, index) => {...})`: Maps over the array to generate `FaStar` components.

Each `FaStar` component:
- `key={index}`: Unique key for each star.
- `className`: Sets the class to `active` if the star index is less than or equal to the `hover` or `rating` state, otherwise sets it to `inactive`.
- `onClick`: Calls `handleClick` with the star index.
- `onMouseMove`: Calls `handleMouseEnter` with the star index.
- `onMouseLeave`: Calls `handleMouseLeave`.
- `size={40}`: Sets the size of the star icon.

### Export

```javascript
export default StarRating
```
- Exports the `StarRating` component as the default export of the module.

This code creates a star rating component where users can click to set a rating and hover over stars to see a preview of their rating. The stars change their appearance based on the rating and hover states, controlled by CSS classes `active` and `inactive`.
