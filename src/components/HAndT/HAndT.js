import { useState } from "react";

const HAndT = () => {
  const [select, setSelect] = useState("select value");
  const [result, setResult] = useState();
  const [lastSelect, setLastSetect] = useState("");
  const [error, setError] = useState(false);
  const resultBlock = result
    ? result.map((col, i) => {
        return (
          <div key={i} className="d-flex flex-column p-1">
            {col.map((row, j) => {
              return <div key={j}>{row}</div>;
            })}
          </div>
        );
      })
    : "";
  const handleSelect = (e) => {
    setSelect(e.target.value);
    setError(false);
  };
  const handleSubmit = () => {
    if (select === "select value") {
      setError(true);
      return;
    }
    const tempRows = result ? [...result] : [];
    if (lastSelect === select) {
      const lastcol = tempRows.length - 1;
      tempRows[lastcol] = [...tempRows[lastcol], select];
      setResult(tempRows);
    } else {
      tempRows.push([select]);
      setResult(tempRows);
    }
    setLastSetect(select);
    setSelect("select value");
  };
  console.log("render", result);
  return (
    <div className="col">
      <h1 className="display-2">Head and Tail</h1>
      <div>
        {error && (
          <label
            className="text-danger"
            style={{ fontSize: ".9em" }}
            for="error"
          >
            Please select value from dropdown
          </label>
        )}
        <select className="form-control" value={select} onChange={handleSelect}>
          <option value="select value">select value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button className="btn btn-block mt-3" onClick={handleSubmit}>
          submit
        </button>
        <div className="row p-3">{resultBlock}</div>
      </div>
    </div>
  );
};
export default HAndT;
