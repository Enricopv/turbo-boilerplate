import * as React from 'react'
import {Button as RNButton} from "react-native"
import { orderBy } from 'lodash'

const people = [{name:"jason", age: 333},{name:"joh", age: 32}]

export const Button = () => {
  console.log('orderBY', orderBy(people, ['age'], ['asc']))
  return <RNButton title="Cool Native   "/>;
};
