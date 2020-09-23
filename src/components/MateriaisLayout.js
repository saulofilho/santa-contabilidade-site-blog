import React, { Fragment } from "react"
import MateriaisHeader from './MateriaisHeader'
import MateriaisHero from './MateriaisHero'
import MateriaisFooter from './MateriaisFooter'

export default ({ children }) => {
  return (
    <section
      className="materiais-page"
    >
      <MateriaisHeader />
      <MateriaisHero />
      <Fragment>{children}</Fragment>
      <MateriaisFooter />
    </section>
  )
}
