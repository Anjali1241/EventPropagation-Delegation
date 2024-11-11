// A click event propagates in 3 phases:

// Capture phase — Starting from window, document, and the root element, the event dives down through ancestors of the target element
// Target phase — The event gets triggered on the element on which the user has clicked
// Bubble phase — Finally, the event bubbles up through ancestors of the target element until the root element, document, and window.