const addCart = () => {
    const item = [
        {
            id: "add",
            title: '+',
            math: '+',
            price: '+',
            color: 'operator'
        },
        {
            id: "minus ",
            title: '-',
            math: '-',
            price: '-',
            color: 'operator'
        },
        {
            id: "multiply",
            title: 'x',
            math: '*',
            price: 'x',
            color: 'operator'
        },
        {
            id: "divided",
            title: '÷',
            math: '/',
            price: '÷',
            color: 'operator'
        },
        {
            id: "left",
            title: '(',
            math: '(',
            price: '(',
            color: 'operator'
        },
        {
            id: "right",
            title: ')',
            math: ')',
            price: ')',
            color: 'operator'
        },
        {
            id: "drag1",
            title: 'blue',
            price: '100',
            color: 'blue'
        },
        {
            id: "drag2",
            title: 'red',
            price: '80',
            color: 'red'
        },
        {
            id: "drag3",
            title: 'yellow',
            price: '70',
            color: 'yellow'
        },
        {
            id: "drag4",
            title: 'gray',
            price: '60',
            color: 'green'
        },
        {
            id: "drag5",
            title: 'dark',
            price: '50',
            color: 'dark'
        }
    ]
    const num1 = document.getElementById('num1')
    const num1Count = document.querySelectorAll('.badge')
    let collection = document.getElementById('collection')
    let draggerBox = document.querySelector('.dragger_box');
    
    let dropper = document.querySelectorAll('.textBox');
    let disPlayDetail = document.getElementById('detail')
    let disPlayresult = document.querySelector('#numTotal')
    let ac = document.getElementById('clear')
    let pendingVal;
    let displayVal = '0';
    let evalStrAry = [];
    let evalStrAry_math = []
    
    let dragger = document.querySelectorAll('.numBox');
    function init() {
        item.forEach(function (obj, key) {
            if (obj.math) {
                let htmlTemplate = ''
                htmlTemplate = htmlTemplate + `<span draggable="true" class="m-1 badge math calBtn-${obj.color} rounded-pill numBox" id="${obj.id}" data-math="${obj.math}" data-value="${obj.math}">  
              ${obj.title}
            </span>`;
                const menu = document.querySelector('#menu');
                menu.innerHTML += htmlTemplate
            } else {
                let htmlTemplate = ''
                htmlTemplate = htmlTemplate + `<span draggable="true" class="m-1 badge numBox calBtn-${obj.color} rounded-pill numBox"id="${obj.id}" data-value="${obj.price}">  
              ${obj.title}${obj.price}
            </span>`;
                const menu = document.querySelector('#menu');
                menu.innerHTML += htmlTemplate
            }
        })
        dragger.forEach((item) => {
            console.log(dragger);
            item.onclick = function(){console.log("hi");}
            item.addEventListener('dragstart', drag);
            item.addEventListener('dragover', drop_handler);
        })
    }
    init()
    
            
    

    // num1.addEventListener("dragenter", (e) => {
    //     e.target.style.background = "#ebf8ff";
    // })
    // num1.addEventListener("dragend", (e) => {
    //     e.target.style.opacity = "1";
    // })
    // num1.addEventListener("dragleave", (e) => {
    //     e.target.style.background = "#FFF";
    // })

    // num1Count.forEach((item) => {
    //     item.addEventListener("dragstart", (e) => {
    //         // e.target.style.background = "#FFF";
    //         e.dataTransfer.effectAllowed = "none";
    //         e.dataTransfer.dropEffect = 'none';
    //     });
    //     item.addEventListener("dragover", (e) => {
    //         if (e.preventDefault) {
    //             e.preventDefault();
    //         }
    //         e.dataTransfer.dropEffect = 'move';
    //         return false;
    //     });
    // })

    // draggerBox.addEventListener("dragenter", (e) => {
    //     e.preventDefault();
    //     // e.target.style.background = "#ebf8ff";
    // });
    // draggerBox.addEventListener("ondrop", drop);
    
    // draggerBox.addEventListener("dragleave", (e) => {
    //     e.preventDefault();
    //     // e.target.style.background = "#FFF";s
    // });
    // draggerBox.addEventListener("dragend", (e) => {
    //     e.target.style.opacity = "1";
    //     let evalStrAry_length = evalStrAry.length;
    //     let evalStrAry_math_length = evalStrAry_math.length;
    //     evalStrAry = evalStrAry.slice(0, evalStrAry_length - 1);
    //     evalStrAry_math = evalStrAry_math.slice(0, evalStrAry_math_length - 1);
    //     let evaluation_math = eval(evalStrAry_math.join(' '));
    
    //     console.log(evalStrAry);
    //     console.log(evalStrAry.length);
    //     if (displayVal === '') {
    //         displayVal = '0';
    //     }
    //     disPlayresult.value = evaluation_math;
    //     disPlayDetail.innerText = evalStrAry.join(' ');
    // }, false);

    let updateDisplayVal = (e) => {
        // console.log(e.target);
        btnText = e.target.dataset.value;

        if (displayVal === '0') {
            displayVal = '';
            displayVal += btnText;
        } else {
            displayVal += btnText;
        }
        console.log(displayVal)
        disPlayresult.value = displayVal;
        disPlayDetail.innerText = displayVal;
    }
        
    for (let i = 0; i < dropper.length; i++) {
        dropper[i].addEventListener('dragend', updateDisplayVal, false);
        dropper[i].addEventListener('drop', drop);
        dropper[i].addEventListener('dragover', allowDrop);
    }


    // let performOperation = (e) => {
    //     // let operator = e.target.dataset.math; // 實際運算 ex 6/3
    //     // console.log(operator);
    //     if (disPlayDetail) {
    //         pendingVal = displayVal;
    //         displayVal = '0';
    //         disPlayresult.value = pendingVal;
    //         evalStrAry.push(pendingVal);
    //         evalStrAry_math.push(pendingVal);
    //         let evaluation_math = eval(evalStrAry_math.join(' '));
    //         console.log(evalStrAry);
    //         // console.log(evalStrAry_math);
        
    //         let evaluation_list = evalStrAry.join(' ');
    //         disPlayresult.value = evaluation_math;
    //         disPlayDetail.innerText = evaluation_list;
    //     }
    // }

    // for (let i = 0; i < dropper.length; i++) {
    //     dropper[i].addEventListener('dragend', performOperation, false);
    // }

    // ac.addEventListener('click', () => {
    //     displayVal = '0';
    //     pendingVal = undefined;
    //     evalStrAry = [];
    //     evalStrAry_math = [];
    //     let html;
    //     disPlayresult.value = displayVal;
    //     disPlayDetail.innerText = displayVal;
    //     html = collection.innerHTML;
    //     html = window.location.reload();
    // }, false);
    
    

    const drag = (ev) => {
        ev.preventDefault()
        ev.dataTransfer.setData("application/json", ev.target.dataset.value);
        // ev.dataTransfer.setData("application/json", ev.target.dataset.math);
        ev.dataTransfer.setData("text/plain", ev.target.id);
        ev.target.style.opacity = "0.4";
        // let index = ev.target.index
        // console.log(index);
        // ev.dataTransfer.setData('text/plain', ev.target.index);
        ev.dataTransfer.effectAllowed = 'move';
    }
    const drop_handler = (ev) => {
        ev.preventDefault()
        ev.dataTransfer.dropEffect = "none"
        ev.dataTransfer.effectAllowed = "none";
    }
    const allowDrop = (ev) => {
            ev.preventDefault();
        }
    const drop = (ev) => {
        ev.preventDefault();
        ev.target.style.opacity = "1";
        var data = ev.dataTransfer.getData("text/plain");
        var data2 = ev.dataTransfer.getData("application/json");
        // var dataMath = parseInt(ev.dataTransfer.getData("application/json"));
        // console.log(typeof(data2));
        ev.target.appendChild(document.getElementById(data));
        ev.target.style.background = "#FFF"
    }
    // function TwoDecimal() {
    //         const Num = disPlayresult.value
    //         const TwoDecimal = Math.round(Num * 100) / 100;
    //     disPlayresult.value = TwoDecimal
        
    // }
}
    // export {
    //     allowDrop,
    //     drag,
    //     drop_handler,
    //     drop,
    // TwoDecimal,
    //     test
    // }

const dragTest = () => {
$(".box").on({
  "dragstart": function(event){
    console.log("dragstart");
  event.originalEvent.dataTransfer.setData('text/plain',event.target.id)
  },
  "dragend": function(){
    console.log("dragend");
    $(".target").removeClass("over")
  }
})

$("#target2").on({
  "dragenter": function(event){
    event.preventDefault();
    console.log("dragenter");
  },
  "dragover": function(event){
    event.preventDefault();
    $(this).addClass("over")
    
    console.log("dragover");
    
  },
  "dragleave": function(){
    console.log("dragleave");
    $(".target").removeClass("over")
    
  },
  "drop": function(event){
    event.preventDefault();
    // event.stopPropagation(); //停止事件氣泡現象
    console.log("drop");
    let id = event.originalEvent.dataTransfer.getData('text/plain');
    $("#"+id).clone().appendTo(event.target);
  }
})
}
export { dragTest };