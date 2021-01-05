export default function Ssr({ datetime }) {
  return (
    <h1>{datetime}</h1>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://nextjs-xi-pied.vercel.app/api/date')
  const json = await res.json()
  return { props: { date: json.date } }
}
