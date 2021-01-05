export default function Ssr({ date }) {
  return (
    <h1>{date}</h1>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://nextjs-xi-pied.vercel.app/api/date')
  const json = await res.json()
  return { props: { date: json.date } }
}
