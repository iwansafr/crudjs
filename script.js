let id = null
const input = (id,type='text',label = '',placeholder = '')=>{
  return `
  <label>${label}</label><br>
  <input type="${type}" id="${id}" placeholder="${placeholder}">
  <br>
  `
  makeVariable(id)
}
const button = (id, label = 'simpan') =>{
  return `<button id="${id}">${label}</button>`
  makeVariable(id)
}
const div = (id)=>{
  return `<div id="${id}"></div>`
  makeVariable(id)
}
const makeVariable = (id)=>{
  eval(`const ${id} = document.querySelector("#${id}")`)
}
const deleteData = (index)=>{
  data.splice(index, 1)
  loadData(data,dataList)
}
const editData = (index)=>{
  namaBarang.value = data[index].nama
  hargaBarang.value = data[index].harga
  id = index
}
const loadData = (data, element) => {
  console.log(element)
  element.innerHTML = ''
  let i =0
  data.forEach(item => {
    element.innerHTML += `<p>Nama Barang : ${item.nama} | Harga Barang : ${item.harga} <button onclick="editData(${i})">Edit</button><button onclick="deleteData(${i})">hapus</button></p>`
    i++
  });
}
const clear = ()=>{
  namaBarang.value = null
  hargaBarang.value = null
  id = null
}
document.body.innerHTML += input('namaBarang','text','Nama Barang','Masukkan Nama Barang')
document.body.innerHTML += input('hargaBarang','number','Harga Barang','Masukkan Harga Barang')
document.body.innerHTML += button('btnSimpan')
document.body.innerHTML += button('btnClear','clear')
document.body.innerHTML += div('dataList')
let data = [
  {
    'nama':'tas',
    'harga':1000
  },
  {
    'nama':'sepatu',
    'harga':10000
  },
]
loadData(data,dataList)
btnClear.addEventListener('click',()=>{
  clear()
})
btnSimpan.addEventListener('click',()=>{
  if(id == null){
    data.push({
      'nama':namaBarang.value,
      'harga':hargaBarang.value
    }) 
    clear()
  }else{
    data[id].nama = namaBarang.value
    data[id].harga = hargaBarang.value
  }
  loadData(data,dataList)
})

