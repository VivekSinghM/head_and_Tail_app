import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="col p-2">
      <div className="row p-2 m-2 bg-light border ">
        <h1 className="display-4 col-md order-md-1 order-2 align-self-center">
          No Longer Human
        </h1>

        <div className="col-md-4 order-1 d-flex align-items-center justify-content-center">
          <img
            style={{ maxHeight: "3in" }}
            src="https://rukminim1.flixcart.com/image/416/416/kiyw9e80-0/book/c/s/7/no-longer-human-original-imafymrnzy5yvyxh.jpeg"
            alt="logo"
          />
        </div>
      </div>
      <div className="row p-2 m-2 bg-light border ">
        <div className="col-md order-md-1 order-2">
          <h1>
            <Link to="/about">About</Link>
          </h1>
          <p style={{ fontSize: "1.2em" }}>
            Portraying himself as a failure, the protagonist of Osamu Dazai's No
            Longer Human narrates a seemingly normal life even while he feels
            himself incapable of understanding human beings...
          </p>
        </div>
      </div>
      <div className="row p-2 m-2 bg-light border ">
        <div className="col-md order-md-1 order-2">
          <h1>
            <Link to="/head&tail">Head & Tail</Link>
          </h1>
          <p style={{ fontSize: "1.25em" }}>
            click on above link to goto head and tail page.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
