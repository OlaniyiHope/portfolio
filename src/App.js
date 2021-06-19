import React from "react"
import { Contact } from "./components/contact/Contact"
import { Intro } from "./components/intro/Intro"
import { Portfolio } from "./components/portfolio/portfolio"
import { Testimonial } from "./components/testimonial/Testimonial"
import { Topbar } from "./components/topbar/Topbar"
import { Work } from "./components/work/Work"
import "./app.scss"



function App() {
  return (
    <div className="app">
<Topbar>

</Topbar>
<div className="sections">

<Intro />
<Portfolio />
<Work />
<Testimonial />
<Contact />
</div>
    </div>
  );
}

export default App;
