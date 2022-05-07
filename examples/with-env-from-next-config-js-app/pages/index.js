export default function Home(props) {
    console.log(props)
  return (
    <div>
      RESTURL_SPEAKERS {process.env.RESTURL_SPEAKERS}
      <br />
      RESTURL_SESSIONS {process.env.RESTURL_SESSIONS}
    </div>
  )
}

export async function getServerSideProps() {
    console.log('--------', process.env)
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()

    // Pass data to the page via props
    // return { props: { data } }
    return { props: { name: 'zz' } }
}