import React from 'react'
import { Configure } from 'react-instantsearch-dom'
import {
  MapMarker,
  LocationDropDown,
  MileSelect,
  LocationInput
} from '../shared'

const proximityOptions = [
  { text: '15 miles', value: 15 },
  { text: '25 miles', value: 25 },
  { text: '50 miles', value: 50 },
  { text: '75 miles', value: 75 },
  { text: '100 miles', value: 100 }
]

const fixedMeters = 1609.344

export const milesToMeters = miles => Math.floor(miles * fixedMeters)

export default class PlacesInput extends React.Component {
  constructor (props) {
    super(props)
    this.onLocationChange = this.onLocationChange.bind(this)
    this.onRadiusChange = this.onRadiusChange.bind(this)
    this.state = {
      aroundLatLng: '',
      radius: proximityOptions[0].value
    }
  }

  onLocationChange (e) {
    const {
      suggestion: {
        latlng: { lat, lng }
      }
    } = e
    this.setState({
      aroundLatLng: `${lat}, ${lng}`
    })
  }

  onRadiusChange (e) {
    const radius = e.target.value
    this.setState({ radius })
  }

  async componentDidMount () {
    const places = await import('places.js')
    const input = places.default({
      container: document.querySelector('#places-location-input'),
      templates: {
        value: suggestion => suggestion.name
      }
    })
    input.on('change', this.onLocationChange)
  }

  render () {
    const { radius } = this.state
    return (
      <div>
        <LocationInput
          type='text'
          placeholder='Search location'
          id='places-location-input'
        />
        <LocationDropDown>
          <label htmlFor='location-proximity-miles'>
            <MapMarker />
            within
          </label>
          <MileSelect
            onChange={this.onRadiusChange}
            id='location-proximity-miles'
            value={radius}
          >
            {proximityOptions.map(({ text, value }) => (
              <option value={value} key={value}>
                {text}
              </option>
            ))}
          </MileSelect>
        </LocationDropDown>
        <Configure
          aroundLatLng={this.state.aroundLatLng}
          aroundRadius={milesToMeters(radius)}
          facets={['_geoloc', 'zip']}
        />
      </div>
    )
  }
}
