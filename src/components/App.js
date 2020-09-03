import React from "react";
import Header from "../containers/Header";

import { getStore } from "../store";

const store = getStore();

const MainSection = React.lazy(() =>
  import("../containers/MainSection").then(async module => {
    const todos = await import("../reducers/todos").then(
      todosModule => todosModule.default
    );
    store.injectReducer("todos", todos);

    return module;
  })
);

const App = () => (
  <React.Suspense fallback={<div>loading...</div>}>
    <Header />
    <MainSection />
  </React.Suspense>
);

export default App;
