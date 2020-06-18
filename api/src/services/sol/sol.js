import fetch from 'node-fetch'

export const getSols = async () => {
  const res = await fetch(
    'https://f1swges98g.execute-api.us-east-1.amazonaws.com/main/available-sols'
  )

  if (!res.ok) {
    console.log(res.status)
    throw new Error('Unable to fetch sols')
  }

  const json = await res.json()

  return json
}
