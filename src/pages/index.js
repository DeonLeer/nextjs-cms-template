import Head from "next/head"
import Script from "next/script"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md'

export default class Home extends Component {
  render() {
    let { title, items } = attributes
    return (
      <>
        <Head>
          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {items.map((item, k) => (
              <li key={k}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}