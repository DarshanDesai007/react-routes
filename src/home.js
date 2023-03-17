import { Link } from "react-router-dom";
import moment from "moment";
import Example from "./use";

let t2 = moment().format("dddd");
let time = moment().format("MMMM Do YYYY, h:mm:ss a");

function Home() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/book">book</Link>
                    </li>
                    <li>
                        <Link to="/main">Hello</Link>
                    </li>
                    <li>
                        <h1> {time}</h1>
                    </li>
                    <li>
                        <h1> {t2}</h1>
                    </li>
                    <li>
                        <h1>{moment().format("MMM Do YY")}</h1>
                    </li>
                    <li>
                        <h1>{moment().format()}</h1>
                    </li>
                    <li>
                        <h1>
                            {
                                moment("20111031", "YYYYMMDD").fromNow()
                            }
                        </h1>
                    </li>
                    <li>
                        <h1>
                            {
                                moment("20150620", "YYYYMMDD").fromNow()
                            }
                        </h1>
                    </li>
                    <li>
                        {/* <Link to="/new">new</Link> */}
                    </li>
                    <li>
                        <Example />
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Home;
