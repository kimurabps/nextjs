import fetch from 'isomorphic-unfetch'

export default function Ssr({ date }) {
  return (
    <h1>{date}</h1>
  )
}

Ssr.getServerSideProps = async () => {
  const res = await fetch('/api/date')
  const json = await res.json()
  return { date: json.date }
}
