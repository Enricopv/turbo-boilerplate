import { Button } from "ui";
import * as React from 'react'

import { requester } from 'requester';

const url =
  'https://api.pushshift.io/reddit/search/submission/?subreddit=nba&sort=desc&sort_type=created_utc&after=1523588521&before=1523934121&size=1000';


export default function Web() {
 React.useEffect(()=>{
  requester.get({url}).then(result => {
    console.log('result',result.data.data)
  })
 })
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
