import React from 'react';
import { useLocation } from 'react-router-dom';

export default function CartList() {
  const location = useLocation();
  console.log(location);
  return <div>CartList</div>;
}
