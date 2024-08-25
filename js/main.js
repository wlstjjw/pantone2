const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})
const hover = document.querySelectorAll('.hover');
hover.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(12)';
    })
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    })
});

const menu = document.querySelector('.menu');
const clickmenu = document.querySelector('.clickmenu');
const closebtn = document.querySelector('.closebtn');
menu.addEventListener('click', (e) => {
    e.preventDefault();
    clickmenu.style.display = 'block';
})
closebtn.addEventListener('click', () => {
    clickmenu.style.display = 'none';
})


const scrollstart = document.querySelector('.scrollstart');
const scrstSlide1 = document.querySelector('.scrstart-slide1');
const scrstSlide2 = document.querySelector('.scrstart-slide2');

let scrstLeft = 100;
let scrstHeight = 40;

scrstSlide1.style.left = - scrstLeft + '%';
scrstSlide2.style.left = scrstLeft + '%';
scrollstart.style.height = scrstHeight + 'vh';

const section2 = document.querySelector('#section2');
const rightSlide = document.querySelector('.right-slide');
const slideBox = document.querySelector('.slide-box');
const lightgraySlide = document.querySelector('.lightgray-slide');
const darkgraySlide = document.querySelector('.darkgray-slide');

let slideBoxTop = 0;
slideBox.style.top = slideBoxTop;

lightgraySlide.style.right = - 140 + '%';
darkgraySlide.style.right = - 200 + '%';

const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');
const section5 = document.querySelector('#section5');
const section6 = document.querySelector('#section6');
const section7 = document.querySelector('#section7');
const section8 = document.querySelector('#section8');
const section9 = document.querySelector('#section9');
const section10 = document.querySelector('#section10');

addEventListener('scroll', function () {
    const scrolltop = document.documentElement.scrollTop;
    scrollstart.style.height = scrstHeight + (scrolltop / 5) + 'vh';
    scrstSlide1.style.left = (scrolltop / 7) - scrstLeft + '%';
    scrstSlide2.style.left = - (scrolltop / 7) + scrstLeft + '%';

    //section2 시작
    if (scrolltop >= section2.offsetTop - this.window.innerHeight / 2) {
        const announce = document.querySelector('.pantone-announce p');
        announce.style.top = '50%';
        announce.style.opacity = 1;
    }

    if (scrolltop >= section2.offsetTop + this.window.innerHeight / 3) {
        const colorvalue = this.document.querySelector('.colorvalue');
        colorvalue.style.left = '0';
    }

    //스크롤 할때 회색 슬라이드가 오른쪽에서 나오도록

    lightgraySlide.style.position = 'absolute';
    lightgraySlide.style.right = 100 + '%';
    darkgraySlide.style.position = 'absolute';
    darkgraySlide.style.right = 100 + '%';

    if (scrolltop >= rightSlide.offsetTop && scrolltop < section3.offsetTop - this.window.innerHeight) {
        let ligrayRight = ((scrolltop - rightSlide.offsetTop) / 10) - 140;

        lightgraySlide.style.position = "fixed";
        lightgraySlide.style.bottom = "0";
        lightgraySlide.style.right = ligrayRight + '%';

        if (ligrayRight >= -50) {
            lightgraySlide.style.right = -50 + '%';

            let dkgrayRight = (scrolltop - rightSlide.offsetTop) / 15 - 200;

            darkgraySlide.style.position = "fixed";
            darkgraySlide.style.bottom = "0";
            darkgraySlide.style.right = dkgrayRight + '%';

            if (dkgrayRight >= -75) {
                darkgraySlide.style.right = -75 + '%';
            }
        }
    }
    //회색슬라이드가 정해진 영역까지 다 나왔을 때, 스크롤 해도 더 이상 위치가 변하지 않도록 고정
    if (scrolltop >= section3.offsetTop - this.window.innerHeight) {
        lightgraySlide.style.position = "absolute";
        lightgraySlide.style.right = 0 + '%';

        darkgraySlide.style.position = "absolute";
        darkgraySlide.style.right = -50 + '%';
    }
    if (scrolltop >= section3.offsetTop - 500) {
        const colorpallet = document.querySelector('.colorpallet');
        colorpallet.style.left = '0';
    }
    //section2 끝


    //section3 시작
    //컬러 블록이 스크롤 할 때 왼쪽과 오른쪽으로 움직이도록
    const colorblockL = document.querySelector('#section3 .go-left-block');
    const colorblockR = document.querySelector('#section3 .go-right-block');
    const fixedblock = document.querySelector('#section3 .fixed-block');

    //scrolltop이 colorblock의 offsetTop이 되었을 때, 컬러블록의 높이가 고정된 채 좌우로 움직이도록
    if (scrolltop >= section3.offsetTop + 750 && scrolltop < section3.offsetTop + 750 + 1600) {
        colorblockL.classList.remove('movebefore');
        colorblockL.classList.remove('moveafter');
        colorblockL.classList.add('move');
        colorblockL.style.left = - (scrolltop - (section3.offsetTop + 750)) + 'px';

        colorblockR.classList.remove('movebefore');
        colorblockR.classList.remove('moveafter');
        colorblockR.classList.add('move');
        colorblockR.style.right = - (scrolltop - (section3.offsetTop + 750)) + 'px';

        fixedblock.classList.remove('movebefore');
        fixedblock.classList.remove('moveafter');
        fixedblock.classList.add('move');

        if (- (scrolltop - (section3.offsetTop + 750)) <= -1250) {
            colorblockL.style.left = '-1250px';
            colorblockL.classList.remove('move');
            colorblockL.classList.add('moveafter');

            colorblockR.style.right = '-1250px';
            colorblockR.classList.remove('move');
            colorblockR.classList.add('moveafter');

            fixedblock.classList.remove('move');
            fixedblock.classList.add('moveafter');
        }

    }
    else if (scrolltop <= section3.offsetTop + 750) {
        colorblockL.classList.remove('move');
        colorblockL.classList.add('movebefore');

        colorblockR.classList.remove('move');
        colorblockR.classList.add('movebefore');

        fixedblock.classList.remove('move');
        fixedblock.classList.add('movebefore');
    }
    //section3 끝

    //section4 시작
    //bold-subject가 스크롤 했을 때 오른쪽으로 나오며 나타나게 하기
    if (scrolltop >= section4.offsetTop - 500) {
        const socialmedia = document.querySelector('.socialmedia');
        socialmedia.style.left = '0';
    }
    if (scrolltop >= section4.offsetTop + 1000) {
        const fashion = document.querySelector('.fashion');
        fashion.style.left = '0';
    }
    //section4 끝

    //section5 시작
    //bold-subject가 스크롤 했을 때 오른쪽으로 나오며 나타나게 하기
    //img의 사이즈가 스크롤 한 만큼 바뀌게 하기
    if (scrolltop >= section5.offsetTop - 500) {
        const adobestock = document.querySelector('.adobestock');
        adobestock.style.left = 0;
        const textHidden = document.querySelector('.text-hidden');
        textHidden.style.opacity = 1;
        textHidden.style.top = '300px';
    }
    if (scrolltop >= section5.offsetTop + 1000) {
        const cosmetic = document.querySelector('.cosmetic');
        cosmetic.style.left = '0';
    }
    if (scrolltop >= section5.offsetTop + 1300) {
        const cosImg = document.querySelector('.cosimg-bigger');
        cosImg.style.width = 300 + (scrolltop - section5.offsetTop - 1300) / 5 + 'px';
        if ((scrolltop - section5.offsetTop - 1300) / 5 > 300) {
            cosImg.style.width = '600px';
        }
    }
    //section5 끝

    //section6 시작
    //스크롤 할 때마다 visual 이미지 위의 문장이 오른쪽에서 왼쪽으로 움직이도록 하기
    if (scrolltop >= section6.offsetTop && scrolltop <= section6.offsetTop + 2000) {
        const visualTextBox = document.querySelector('.visual div');
        visualTextBox.style.top = scrolltop - section6.offsetTop + 'px';
        const visualText = document.querySelector('.visual div p');
        visualText.style.transform = `translateX(-${(scrolltop - section6.offsetTop) * 2.5}px)`;
    }
    //section6 끝

    //section7 시작
    //colorblock 스크롤에 따라 좌우로 움직이게 하기
    const colorblockL2 = document.querySelector('#section7 .go-left-block');
    const colorblockR2 = document.querySelector('#section7 .go-right-block');
    const fixedblock2 = document.querySelector('#section7 .fixed-block');

    if (scrolltop >= section7.offsetTop && scrolltop < section7.offsetTop + 1600) {
        colorblockL2.classList.remove('movebefore');
        colorblockL2.classList.remove('moveafter');
        colorblockL2.classList.add('move');
        colorblockL2.style.left = - (scrolltop - (section7.offsetTop)) + 'px';

        colorblockR2.classList.remove('movebefore');
        colorblockR2.classList.remove('moveafter');
        colorblockR2.classList.add('move');
        colorblockR2.style.right = - (scrolltop - (section7.offsetTop)) + 'px';

        fixedblock2.classList.remove('movebefore');
        fixedblock2.classList.remove('moveafter');
        fixedblock2.classList.add('move');

        if (- (scrolltop - (section7.offsetTop)) <= -1250) {
            colorblockL2.style.left = '-1250px';
            colorblockL2.classList.remove('move');
            colorblockL2.classList.add('moveafter');

            colorblockR2.style.right = '-1250px';
            colorblockR2.classList.remove('move');
            colorblockR2.classList.add('moveafter');

            fixedblock2.classList.remove('move');
            fixedblock2.classList.add('moveafter');
        }

    }
    else if (scrolltop <= section7.offsetTop) {
        colorblockL2.classList.remove('move');
        colorblockL2.classList.add('movebefore');

        colorblockR2.classList.remove('move');
        colorblockR2.classList.add('movebefore');

        fixedblock2.classList.remove('move');
        fixedblock2.classList.add('movebefore');
    }
    //section7 끝

    //section8 시작
    //스크롤 할 때 이미지 커지도록하기
    const interImg = document.querySelector('.interimg-bigger');
    if (scrolltop >= section8.offsetTop + 700) {
        interImg.style.width = (scrolltop - section8.offsetTop - 700) / 5 + 400 + 'px';
        if ((scrolltop - section8.offsetTop - 700) / 5 + 400 >= 600) {
            interImg.style.width = 600 + 'px';
        }
    }
    //section8 끝

    //section9 시작
    //bold-subject가 스크롤 했을 때 오른쪽으로 나오며 나타나게 하기
    //스크롤 하면 제품이 나타나도록 하기
    const shoppantone = document.querySelector('.shoppantone');
    const itemImg = document.querySelectorAll('.item-img');
    const moreBox = document.querySelector('.more-box');

    if (scrolltop >= section9.offsetTop - 700) {
        shoppantone.style.left = '0';
        itemImg.forEach(item => item.style.opacity = 1);
    }
    if (scrolltop >= section9.offsetTop + 500) {
        moreBox.style.height = '150px';
    }
    //section9 끝
})
