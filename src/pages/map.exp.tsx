export default function List() {
  console.log(Object.entries({keyO: {key1:"val1"},keyO2: {key2:"val2"}}))
  return (
    <div>
      {["fasfd","asdfasd","asfasdf"].map((e, index) => (
        <div key={index}>
          {e}
        </div>
      ))}
      </div>
  );
  
}

