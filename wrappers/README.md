## Wrappers

- This folder in the monorepo contains libraries which do not need to be built before being used.
- Wrapper libraries are libraries that "wrap" around a third party library like stripe, sendGrid, twilio, axios, etc.
- This is so that if the third party library requirements change, you only need to change the third party library in a few places as opposed to all your mono repo applications.
- These libraries should have no other monorepo package dependencies.