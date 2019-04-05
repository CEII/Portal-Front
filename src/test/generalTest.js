import ReactDOM from "react-dom";

export const generalTest=Component=>{
	it("Render without crash", ()=>{
		const div=document.createElement("div");
		ReactDOM.render(Component, div);
		ReactDOM.unmountComponentAtNode(div);
	});
};