import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const LayoutProvider = ({children}) => {
  return (
    <>
    <Header/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}
