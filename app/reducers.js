import R from 'ramda';

export default (state = { loading_item: true, loading_items: true, item: {}, items: [], searchText: '' }, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'ITEMS_SUCCESS':
      return R.merge(state, { items: action.items.results, loading_items: false });
    case 'LOADING_ITEMS':
      return R.merge(state, { loading_items: true });
    case 'ITEM_SUCCESS':
      return R.merge(state, { item: action.item, loading_item: false });
    case 'LOADING_ITEM':
      return R.merge(state, { loading_item: true });
    default:
      return state
  }
}
