import fetch from 'isomorphic-unfetch'

export default function Isr({ datetime }) {
  return (
    <h1>{datetime}</h1>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo')
  const json = await res.json()
  return {
    props: { datetime: json.datetime },
    revalidate: 3
  }
}
