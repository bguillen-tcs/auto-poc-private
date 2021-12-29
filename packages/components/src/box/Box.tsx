import React from 'react';

interface BoxProps {
  bg: string
  border: string
  boxShadow: string
  children: JSX.Element
  d: string
  m: string
  p: string
}

const Box = ({
  bg,
  border,
  boxShadow,
  children,
  d,
  m,
  p
}: BoxProps) => {
  return (
    <div style={{ background: bg, border, boxShadow, display: d, padding: p, margin: m }}>
      {children}
    </div>
  )
};

export {
  Box
};