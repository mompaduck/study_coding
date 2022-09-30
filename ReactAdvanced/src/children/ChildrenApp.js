import React from "react"
//import InfoCallout from "./InfoCallout"
//import ImageCallout from "./ImageCallout"
//import EmailCallout from "./EmailCallout"
import Callout from "./Callout" // 공통내용 하나의 통합해서 재사용

function ChildrenApp() {
  return (
    <main>
      <h1>Welcome!</h1>

      <Callout>
        <h2>Don't miss out!</h2>
        <p>
          Unless you don't suffer from FOMO, you better make sure you fill out
          the email form below!
        </p>
      </Callout>

      {/* <InfoCallout
        header="Don't miss out!"
        body="Unless you don't suffer from FOMO, you better make sure you fill out the email form below!"
      /> */}

      <p>
        This is probably the best site you've ever come across. I'm glad you're
        here to witness the magnificence of this website right now.
      </p>

      <Callout>
        <img src="https://picsum.photos/id/102/4320/3240" width="100%" />
        <figcaption>Just look at those sparkling raspberries!</figcaption>
      </Callout>

      {/* <ImageCallout
        img={"https://picsum.photos/id/102/4320/3240"}
        caption="Just look at those sparkling raspberries!"
      /> */}

      <p>
        Here's some more unforgettable content. Lorem ipsum something or other.
      </p>

      <Callout>
        <h2>Give us your email. We definitely won't sell it to anyone.</h2>
        <input type="email" placeholder="Enter Email" />
        <button>Sign me up!</button>
      </Callout>
      {/* <EmailCallout
        header="Give us your email. We definitely won't sell it to anyone."
        btnText="Sign me up!"
      /> */}
    </main>
  )
}

export default ChildrenApp
