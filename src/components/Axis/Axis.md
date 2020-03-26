Axis example: 


```js
import * as d3 from "d3";
import { AxisLeft, AxisRight, AxisTop, AxisBottom } from "./Axis";

<div>
  <AxisBottom>
    {d3.scaleLinear([0, 100])}
  </AxisBottom>
  <AxisTop>
    {d3.scaleLinear([0, 100])}
  </AxisTop>
  <AxisLeft>
    {d3.scaleLinear([0, 100])}
  </AxisLeft>
  <AxisRight>
    {d3.scaleLinear([0, 100])}
  </AxisRight>
</div>
```