"use client";
import React from "react";
import {
  ResponsiveContainer as RC,
  BarChart as BC,
  Bar as B,
  XAxis as XX,
  YAxis as YY,
  CartesianGrid as CG,
  Tooltip as TT,
  Legend as LL,
} from "recharts";

export const ResponsiveContainer = (props: any) => React.createElement(RC as any, props);
export const BarChart = (props: any) => React.createElement(BC as any, props);
export const Bar = (props: any) => React.createElement(B as any, props);
export const XAxis = (props: any) => React.createElement(XX as any, props);
export const YAxis = (props: any) => React.createElement(YY as any, props);
export const CartesianGrid = (props: any) => React.createElement(CG as any, props);
export const Tooltip = (props: any) => React.createElement(TT as any, props);
export const Legend = (props: any) => React.createElement(LL as any, props);


