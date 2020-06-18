// ["AT", "First_UTC", "HWS", "Last_UTC", "PRE", "Season", "WD"]

// AT - atmospheric temp - C (average or 'av')

// First_UTC

// HWS - horizontal wind speed - m/s

// LAST_UTC

// PRE - atmospheric pressure - pascals

// SEASON - relative season on mars

// WD wind direction

export const schema = gql`
  type Weather {
    sol: Int!
    atmosphericTemperature: Float!
    highTemp: Float!
    lowTemp: Float!
    horizontalWindSpeed: Float!
    atmosphericPressure: Float!
    season: String!
  }

  type Query {
    getWeather(sol: Int!): Weather!
  }
`
