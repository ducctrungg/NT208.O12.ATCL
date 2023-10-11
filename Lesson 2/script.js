const input_1 = document.getElementById('func_1a');
const cau1 = document.querySelector('.cau1_a');

function sortArray_a() {
  if (input_1.value.trim() == '')
  {
    return
  }
  let arrInput = input_1.value.trim().split(' ');
  const arrBeforeSort = document.createElement('p');
  arrBeforeSort.innerText = `Mảng trước khi sort: ${arrInput.toString()}`
  const arrAfterSort = document.createElement('p')
  arrAfterSort.innerText = `Mảng sau khi sort: ${arrInput.sort(function (a, b) { return a - b }).toString()}`;
  cau1.appendChild(arrBeforeSort)
  cau1.appendChild(arrAfterSort)
}

const input_1b = document.getElementById('func_1b');
const cau1_b = document.querySelector('.cau1_b');
function sortArray_b() {
  if (input_1b.value.trim() == '')
  {
    return
  }
  const insertionSort = (inputArr) => {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
      // Choosing the first element in our unsorted subarray
      let current = inputArr[i];
      // The last element of our sorted subarray
      let j = i - 1;
      while ((j > -1) && (current < inputArr[j])) {
        inputArr[j + 1] = inputArr[j];
        j--;
      }
      inputArr[j + 1] = current;
    }
    return inputArr;
  }
  
  let arrInput = input_1b.value.trim().split(' ');
  const arrBeforeSort = document.createElement('p');
  arrBeforeSort.innerText = `Mảng trước khi sort: ${arrInput.toString()}`
  const arrAfterSort = document.createElement('p')
  arrAfterSort.innerText = `Mảng sau khi sort: ${insertionSort(arrInput.map(Number)).toString()}`;
  cau1_b.appendChild(arrBeforeSort)
  cau1_b.appendChild(arrAfterSort)
}

function changeColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const circle = document.querySelector('.circle');
  circle.style.backgroundColor = "#" + randomColor;
}

function changeSize() {
  const circle = document.querySelector('.circle');
  const rezise = Math.floor(Math.random() * 200) + 50;
  circle.style.width = `${rezise}px`
  circle.style.height = `${rezise}px`
}

function displayCurrentTime() {
  const timeElement = document.getElementById("time");

  function myTimer() {
    const d = new Date();
    var date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    datetime = date+' '+time;
    timeElement.innerHTML = datetime;
  }
  myTimer();
  // Cập nhật thời gian mỗi giây
  setInterval(myTimer, 1000);
}

// Gọi hàm để hiển thị thời gian
displayCurrentTime();
