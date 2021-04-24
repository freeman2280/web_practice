// tab切换栏开始
window.addEventListener('load', function () {
    var suoyou = document.querySelector('.suoyou');
    var tab_con = document.querySelector('.tab_con');
    var input = document.querySelector('.ipt');
    input.onfocus = function () {
        tab_con.style.display = 'block';
        suoyou.style.backgroundColor = '#F2F2F2';
        input.style.backgroundColor = '#F2F2F2';
        suoyou.style.border = "1px dotted #333";
    }
    input.onblur = function () {
        tab_con.style.display = 'none';
        suoyou.style.border = '0';
        suoyou.style.backgroundColor = '#fff';
        input.style.backgroundColor = '#fff';
    }
})
//图片的文字往两边走
window.addEventListener('load', function () {
    var shop1 = document.querySelector('.shop1');
    shop1.innerHTML = "立享优惠   >";
    shop1.addEventListener('mouseover', function () {
        this.innerHTML = '立享优惠   >';
    })
    var shop2 = document.querySelector('.shop2');
    shop2.addEventListener('mouseover', function () {
        this.innerHTML = '立享购买   >';
    })
    shop1.addEventListener('mouseout', function () {
        this.innerHTML = '立享优惠 >';
    })
    shop2.addEventListener('mouseout', function () {
        this.innerHTML = '立享购买 >';
    })
    console.log(shop1.innerHTML);
})
//tab切换栏结束
//焦点图开始
window.addEventListener('load', function () {
    var arrow_l = document.querySelector('.arrow_l');
    var arrow_r = document.querySelector('.arrow_r');
    var focus = document.querySelector('.floor1');
    // 1鼠标经过focus显示隐藏左右按钮
    focus.addEventListener('mouseover', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseout', function () {
        timer = setInterval(function () {
            arrow_r.click();
        }, 3000)
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })
    // arrow_l.addEventListener('mouseover', function () {
    //     this.style.backgroundColor = '#fff';
    // })
    // arrow_r.addEventListener('mouseover', function () {
    //     this.style.backgroundColor = '#fff';
    // })
    //2动态生成小圆圈 有几个图 就有几个小圆圈
    var ul = focus.querySelector('ul');//foucs里面的ul
    var ol = focus.querySelector('.circle');
    var focusWith = focus.offsetWidth;
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var j = 0; j < ul.children.length; j++) {
                ol.children[j].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            animate(ul, -index * focusWith);
        })

    }

    ol.children[0].className = 'current';
    //点击按钮，切换图片,无缝滚动
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var small_circle = 0;
    arrow_r.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = '0';
            num = 0;
        }
        num++;
        animate(ul, -num * focusWith);
        small_circle++;
        if (small_circle == ol.children.length) {
            small_circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[small_circle].className = 'current';
    })
    arrow_l.addEventListener('click', function () {
        if (num == 0) {
            ul.style.left = -(ul.children.length - 1) * focusWith + 'px';
            num = ul.children.length - 1;
        }
        num--;
        animate(ul, -num * focusWith);
        small_circle--;
        if (small_circle < 0) {
            small_circle = ol.children.length - 1;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[small_circle].className = 'current';
    })
    //自动播放
    var timer = setInterval(function () {
        arrow_r.click();
    }, 3000)
})
//焦点图结束