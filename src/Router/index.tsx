import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout";
import PatternAntiPatternLayout from "../Layout/PatternAntiPatternLayout";

import ComponentsInsideComponentsAntiPattern from "../Pages/ComponentsInsideComponents/AntiPattern";
import ComponentsInsideComponentsPattern from "../Pages/ComponentsInsideComponents/Pattern";
import patternSource from "../Pages/ComponentsInsideComponents/Pattern?raw";
import antiPatternSource from "../Pages/ComponentsInsideComponents/AntiPattern?raw";

import ComponentWithTopLevelState from "../Pages/ComponentWithTopLevelState/AntiPattern";
import ComponentWithIsolatedDialog from "../Pages/ComponentWithTopLevelState/Pattern";
import componentWithTopLevelStateSource from "../Pages/ComponentWithTopLevelState/AntiPattern?raw";
import componentWithIsolatedDialogSource from "../Pages/ComponentWithTopLevelState/Pattern?raw";

import ComponentWithScrollAndHeavyChild from "../Pages/ComponentsWithScrollAndHeavyChild/AntiPattern";
import ComponentWithScrollAndHeavyChildPattern from "../Pages/ComponentsWithScrollAndHeavyChild/Pattern";
import componentWithScrollAndHeavyChildSource from "../Pages/ComponentsWithScrollAndHeavyChild/AntiPattern?raw";
import componentWithScrollAndHeavyChildPatternSource from "../Pages/ComponentsWithScrollAndHeavyChild/Pattern?raw";

import ListWithRandomKeys from "../Pages/ListKeys/AntiPattern";
import ListWithRandomKeysPattern from "../Pages/ListKeys/Pattern";
import listWithRandomKeysSource from "../Pages/ListKeys/AntiPattern?raw";
import listWithRandomKeysPatternSource from "../Pages/ListKeys/Pattern?raw";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: (
          <PatternAntiPatternLayout
            AntiPattern={ComponentsInsideComponentsAntiPattern}
            Pattern={ComponentsInsideComponentsPattern}
            patternSource={patternSource}
            antiPatternSource={antiPatternSource}
          />
        ),
      },
      {
        path: "/top-level-state",
        element: (
          <PatternAntiPatternLayout
            AntiPattern={ComponentWithTopLevelState}
            Pattern={ComponentWithIsolatedDialog}
            patternSource={componentWithIsolatedDialogSource}
            antiPatternSource={componentWithTopLevelStateSource}
          />
        ),
      },
      {
        path: "/components-with-scroll-and-heavy-child",
        element: (
          <PatternAntiPatternLayout
            AntiPattern={ComponentWithScrollAndHeavyChild}
            Pattern={ComponentWithScrollAndHeavyChildPattern}
            patternSource={componentWithScrollAndHeavyChildPatternSource}
            antiPatternSource={componentWithScrollAndHeavyChildSource}
          />
        ),
      },
      {
        path: "/list-with-random-keys",
        element: (
          <PatternAntiPatternLayout
            AntiPattern={ListWithRandomKeys}
            Pattern={ListWithRandomKeysPattern}
            patternSource={listWithRandomKeysPatternSource}
            antiPatternSource={listWithRandomKeysSource}
          />
        ),
      },
    ],
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
