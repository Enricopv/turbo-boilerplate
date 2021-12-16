import {requester} from '../index'

const testURL = 'https://api.pushshift.io/reddit/search/submission/?subreddit=nba&sort=desc&sort_type=created_utc&after=1523588521&before=1523934121&size=1000'
describe("requester.get", () => {
  it("It  gets", async () => {
    const result = await requester.get({url: testURL})

    expect(result.data).toBeTruthy()
  });
});
