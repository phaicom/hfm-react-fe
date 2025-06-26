import { getCountries, getCountryCallingCode } from 'libphonenumber-js'

export const countries = getCountries()
  .map((code) => ({
    code,
    name: new Intl.DisplayNames(['en'], { type: 'region' }).of(code) || code,
    dial: `+${getCountryCallingCode(code)}`,
  }))
  .sort((a, b) => a.name.localeCompare(b.name))
