export function getItemsApi(){
    return  fetch('http://localhost:5000/items')
      .then(res=> res.json())
      .then(items=> items)
}