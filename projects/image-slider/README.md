
### Introduction to Image Slider

Creating an image slider is a common task in web development interviews. This project focuses on building an image slider from scratch without using any third-party libraries. The data for the slider can be provided either as a dummy array with image URLs or fetched from an API. This project will demonstrate the latter, making it slightly more complex and realistic.

![alt text](image.png)


### Setting Up the Project

 For this example, we will fetch the data from an API. The component will receive a URL and a limit for the number of images as props.

```jsx
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
```

### Styling the Image Slider

The CSS styles are essential to make the image slider visually appealing and functional. The container will have a fixed width and height, and the images will be positioned using Flexbox. The arrows for navigation will be absolutely positioned.

```css
/* Styles for ImageSlider Component */
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 450px;
}

.current-image {
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
  width: 100%;
  height: 100%;
}

.arrow {
  position: absolute;
  width: 2rem;
  height: 2rem;
  color: #fff;
  filter: drop-shadow(0px 0px 5px #555);
}

.arrow-left {
  left: 1rem;
}

.arrow-right {
  right: 1rem;
}

.circle-indicators {
  display: flex;
  position: absolute;
  bottom: 1rem;
}

.current-indicator {
  background-color: #ffffff;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0 0.2rem;
  cursor: pointer;
}

.hide-current-image{
    display: none;
}

.inactive-indicator{
    background-color: gray;
}
```

### Adding Functionality

The main logic of the slider is to display the current image and hide the others. The arrows and indicators facilitate navigation through the images.

- The `handlePrevious` function sets the current slide to the previous image or wraps around to the last image if the current one is the first.
- The `handleNext` function sets the current slide to the next image or wraps around to the first image if the current one is the last.
- The `handleIndicatorClick` function sets the current slide to the clicked indicator's index.

```jsx
// Handling Previous Slide
const handlePrevious = () => {
  setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
};

// Handling Next Slide
const handleNext = () => {
  setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
};

// Handling Indicator Click
const handleIndicatorClick = (index) => {
  setCurrentSlide(index);
};
```

### Conclusion

This image slider project demonstrates how to create a functional image slider in React. The component fetches data from an API, manages state, handles errors, and implements navigation functionality. The styling ensures the slider is visually appealing and responsive. 