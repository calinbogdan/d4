import React, { useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import * as d3 from "d3";
import styled from 'styled-components';

// axisLeft
// axisBottom
// axisTop
// axisRight

const Group = styled.g`
  & .tick > line {
  }
`;

function AxisRight({ children: scale }) {
  const axisRef = useRef();

  useEffect(() => {
    d3.select(axisRef.current)
      .call(
        d3.axisRight(scale)
          .ticks(5)
          .tickSize(15)
      );
  });

  return <svg>
    <Group ref={axisRef} />
  </svg>
}

function AxisLeft({ children: scale }) {
  const axisRef = useRef();

  useEffect(() => {
    d3.select(axisRef.current)
      .call(
        d3.axisLeft(scale)
          .ticks(5)
          .tickSize(15)
      )
  })

  return <svg>
    <Group ref={axisRef}/>
  </svg>
}

function AxisBottom({ children: scale }) {
  const axisRef = useRef();

  useEffect(() => {
    d3.select(axisRef.current)
      .call(
        d3.axisBottom(scale)
          .ticks(5)
          .tickSize(15)
      )
  })

  return <svg>
    <Group ref={axisRef}/>
  </svg>
}

function AxisTop({ children: scale }) {
  const axisRef = useRef();

  useEffect(() => {
    d3.select(axisRef.current)
      .call(
        d3.axisTop(scale)
          .ticks(5)
          .tickSize(15)
      )
  })

  return <svg>
    <Group ref={axisRef}/>
  </svg>
}

export { AxisRight, AxisLeft, AxisBottom, AxisTop };

