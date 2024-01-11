import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'
import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className = {Styles.title}>HomePage</h1>
      <p className = {Styles.text}> Welcome to the home page!</p>
      <Link href="/ninjas">
        <p className = {Styles.btn}>See ninja listing</p>
        </Link>
    </div>
  )
}
