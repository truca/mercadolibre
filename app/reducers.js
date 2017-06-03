import R from 'ramda';

export default (state = { loading: true, items: [], searchText: '' }, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'ITEMS_SUCCESS':
      return R.merge(state, { items: action.items.results, loading: false });
    case 'LOADING':
      return R.merge(state, { loading: true });
    default:
      return state
  }
}
