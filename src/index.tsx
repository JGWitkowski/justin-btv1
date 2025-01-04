import React from "react";
import { createRoot } from "react-dom/client"; // Use createRoot from react-dom/client
import App from "./App.js";

const container = document.getElementById("root"); // Make sure this matches your HTML
if (container) {
	const root = createRoot(container); // Create a root
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
