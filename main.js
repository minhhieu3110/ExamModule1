let array = []
function inputArray(){
    let n = document.getElementById('n').value
    if (n <= 20) {
        for (let i = 0; i < n; i++) {
            let ptu = +prompt("Nhập Phần tử thứ: "+i)
            array.push(ptu)
        }
        document.getElementById('display').innerHTML = "Mảng vừa nhập vào: "+array
    }else {
        alert("Vui lòng nhập lại số phần tử")
    }
}
function cal(){
    let totalEven = 0
    let totalOdd = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0){
            totalEven += array[i]
            console.log(totalEven)
        }
        if (array[i] % 2 !== 0){
            totalOdd += array[i]
        }
    }
    let hieu = totalEven - totalOdd
    document.getElementById('cal').innerHTML = "Hiệu của Tổng các số chẵn và Tổng các số lẻ có trong mảng: "+hieu
}
document.getElementById('cau2').innerHTML = `<h3>Câu 2.<br></h3>`
function countSlInHoa(chuoi){
    let count = 0
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === chuoi[i].toUpperCase() && chuoi[i] !== chuoi[i].toLowerCase()) {
            count++
        }
    }
    if (count == 0){
        return  "The Strings is not contain upper char"
    }else {
        return "Số Kí tự in hoa: "+ count
    }
}
document.getElementById('disCau2').innerHTML = countSlInHoa("Hello World")

document.getElementById('cau3').innerHTML = `<h3>Câu 3.<br></h3>`
function findSnt(mang){
    function snt(ptmang){
        if (ptmang < 2){
            return false
        }
        for (let i = 2; i <= Math.sqrt(ptmang) ; i++) {
            if (ptmang % i == 0){
                return false
            }
        }
        return true
    }
    let ArraySNT = mang.filter(snt)
    ArraySNT.sort((a, b) => a - b)
    return ArraySNT
}
let mang = [1,5,6,23,8,47,10,3]
document.getElementById('disCau3').innerHTML = "Kết Quả: "+findSnt(mang)

document.getElementById("cau4").innerHTML = '<h3>Câu 4. </h3>' +
    '<button onclick="formAdd()">Thêm điện thoại</button>'
let list = new DsPhone()
let arrPhone = list.listPhone


function formAdd() {
    document.getElementById('disCau4').innerHTML = `
    <input type="text" placeholder="Nhập Mã Điện Thoại" id="inputId">
    <input type="text" placeholder="Nhập Tên" id="inputName">
    <input type="text" placeholder="Nhập Hãng Sản Xuất" id="inputManufacturer">
    <input type="number" placeholder="Nhập Giá" id="inputPrice">
    <button onclick="add()">Thêm</button>
    `
}
function add(){
    let id = document.getElementById('inputId').value
    let name = document.getElementById('inputName').value
    let manufacturer = document.getElementById('inputManufacturer').value
    let price = document.getElementById('inputPrice').value
    let newArrayPhone = new Phone(id, name, manufacturer, price)
    list.addPhone(newArrayPhone)
    console.log(newArrayPhone)
    
}