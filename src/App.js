import React from "react";
import ComponentCard from "./Components/ComponentCard";

function App() {
  return (
    <div>
      <ComponentCard
        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(202) 538-1469",
          email: "mr.whiskaz@catnap.meow"
        }}
      />
      <ComponentCard
        contact={{
          name: "Fluffykins",
          imgUrl: "http://placekitten.com/400/200",
          phone: "(202) 259-6487",
          email: "mr.fluff@catty.meow"
        }}
      />
      <ComponentCard
        contact={{
          name: "Destroyer",
          imgUrl: "http://placekitten.com/400/300",
          phone: "(202) 888-2356",
          email: "folofworld@catnap.com"
        }}
      />
      <ComponentCard
        contact={{
          name: "Mr. Felix",
          imgUrl: "http://placekitten.com/200/100",
          phone: "(202) 987-1125",
          email: "cat@yahoo.com"
        }}
      />
    </div>
  );
}

export default App;
