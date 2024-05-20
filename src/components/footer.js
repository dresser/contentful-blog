import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Matt's Blog is now built with <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a>
    </div>
  </Container>
)

export default Footer
