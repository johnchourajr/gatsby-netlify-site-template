import React from 'react'
import PropTypes from 'prop-types'

import Head from '../components/core/Head'
import Header from '../components/core/Header'
import BodyWrap from '../components/core/BodyWrap'
import Footer from '../components/core/Footer'
import { mainNav, subNav } from '../components/data/NavData'
import './all.scss'

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Head />
    <Header mainNav={mainNav}/>
    <BodyWrap location={location}>
      {children}
    </BodyWrap>
    <Footer subNav={subNav} />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
