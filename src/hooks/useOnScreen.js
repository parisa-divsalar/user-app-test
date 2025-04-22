//www.linkedin.com/in/mohammadrostami/

// Import necessary hooks from React
import { useEffect, useState } from 'react';

// Define the custom hook that takes a reference to an element and observer options
export default function useOnScreen(ref, options = {}) {
  // State to track if the element is intersecting the viewport
  const [isIntersecting, setIntersecting] = useState(false);

  // useEffect hook to create an IntersectionObserver when the component mounts
  useEffect(() => {
    // Merge provided options with default options
    const observerOptions = {
      threshold: options.threshold || 1, // Default threshold value
      root: options.root || null, // Default root value (viewport)
      rootMargin: options.rootMargin || '0px', // Default root margin value
    };

    // Initialize the IntersectionObserver with a callback function and options
    const observer = new IntersectionObserver(([entry]) => {
      // Update the state based on the intersection status of the element
      setIntersecting(entry.isIntersecting);
    }, observerOptions);

    if (ref.current) {
      // Start observing the referenced element
      observer.observe(ref.current);
    }

    // Clean up by disconnecting the observer when the component unmounts
    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [ref, options.threshold, options.root, options.rootMargin]); // Dependency array to ensure this effect runs when the ref or options change

  // Return the current intersection status
  return isIntersecting;
}
