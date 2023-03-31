import './Mother.css';
import Child from "../Child/Child"

function showKids({ arr }) {
    return arr.map((child, index) => {
      return (
        <div className="balloon-container" key={index}>
          <Child children={child} />
        </div>
      );
    });
  }
  
  

export default function Mother(){
  const kids = [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' },
  ];

  return (
    <div className="Mother">
      <h1>A Table Of Five Balloons</h1>
      <div className="balloons">
        {showKids({ arr: kids })}
      </div>
    </div>
  );
}
