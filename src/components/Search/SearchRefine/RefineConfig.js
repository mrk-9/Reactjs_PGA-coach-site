import { compose, map, ascend, prop, sortWith } from 'ramda'
export const labels = {
  JUNIOR_LEAGUE: 'Junior League',
  FIRST_TEE: 'First Tee',
  GIRLS_GOLF: 'Girls Golf',
  DRIVE_CHIP_PUTT: 'Drive, Chip and Putt',
  GET_GOLF_READY: 'Get Golf Ready'
}

const rename = map(item => ({
  ...item,
  label: labels[item.label] || 'Unknown'
}))

const sort = sortWith([ascend(prop('label'))])

const renameAndSort = compose(
  sort,
  rename
)

export default {
  refiners: [
    {
      label: 'Program Type',
      attribute: 'programs.type',
      limit: 5,
      operator: 'and',
      transformItems: items => renameAndSort(items)
    }
  ]
}
