import fetch from 'isomorphic-unfetch'

export default function Ssr({ date }) {
  return (
    <h1>{date}</h1>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo')
  const json = await res.json()
  return { date: json.date }
}
