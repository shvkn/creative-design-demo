import React from 'react'

import { FirstSection } from './components/first-section/first-section'
import { Header } from './components/header/header'
import { Layout } from './components/layout/layout'

const links = [
  { to: 'home', text: 'home' },
  { to: 'portfolio', text: 'portfolio' },
  { to: 'about', text: 'about' },
  { to: 'contact', text: 'contact' },
]

export const App: React.FC = () => {
  return (
    <Layout>
      <Header links={links} />
      <FirstSection />
    </Layout>
  )
}
