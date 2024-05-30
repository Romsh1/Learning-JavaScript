import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum"  
  },
  {
    title: "How long do I have to return my chair?",
    text: 
      "Particular"
  },
  {
    title: "Do you ship to countires outside the EU?",
    text:
      "Excepturi velit laborum"
  }
];

export default function App() {
  return (
    <div>

    </div>
  );
}

function Accordin() {
  return <div>TODO</div>;
}

function AccordinItem({num, title, text}) {
  return <div classname="item">
    <p classname="number">{num}</p>
    <p classname="text">{text}</p>
    <p classname="icon">-</p>
    <div classname="content-box">{text}</div>
  </div>
}
