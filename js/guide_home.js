//1ページ目から2ページ目へ移る時
function nextPage(){
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    const page7 = document.getElementById('page7');
    const page8 = document.getElementById('page8');

    if(page1.classList.contains('active')){
        page1.classList.remove('active');
        page2.classList.add('active');
    }
    else if(page2.classList.contains('active')){
        page2.classList.remove('active');
        page3.classList.add('active');
    }
    else if(page3.classList.contains('active')){
        page3.classList.remove('active');
        page4.classList.add('active');
    }
    else if(page7.classList.contains('active')){
        page7.classList.remove('active');
        page8.classList.add('active');
    }
}

// 卵を選択した時
let selectedEgg = null;
const eggs = document.querySelectorAll('.egg');
const decisionBtn = document.querySelector('#page4 .decision_btn');

eggs.forEach(egg => {
    egg.addEventListener('click',function(event){
        event.stopPropagation();

        //選択した卵を記録
        selectedEgg = this

        eggs.forEach(e =>{
            e.classList.remove('selected');
            e.classList.remove('dimmed');
        });

        this.classList.add('selected');

        eggs.forEach(e =>{
            if(e !== selectedEgg){
                e.classList.add('dimmed');
            }
        });
        decisionBtn.classList.add('show');
    });
});

//卵を選んで決定ボタンを押した時
decisionBtn.addEventListener('click', function(event){
    event.stopPropagation();

    if(selectedEgg === null){
        alert("卵を選んでね！");
        return;
    }

    document.getElementById('page4').classList.remove('active');
    document.getElementById('page5').classList.add('active');

    // 3秒後に6ページ目へ自動移動
    setTimeout(function(){
        document.getElementById('page5').classList.remove('active');
        document.getElementById('page6').classList.add('active');
    }, 6000);
});


//キャラクターの名前を入力したら決定ボタンが出てくる
const nameInput = document.getElementById('character_name');
const nameDecisionBtn = document.getElementById('name_decision');

nameInput.addEventListener('input',function(){
    if(nameInput.value.trim() !== ''){
        nameDecisionBtn.classList.add('show');
    }else{
        nameDecisionBtn.classList.remove('show')
    }
});

//名前を入力して決定ボタンを押した時
nameDecisionBtn.addEventListener('click',function(event){
    event.stopPropagation();

    const name = nameInput.value.trim();
    if(name === ''){
        alert("名前を入力してね！");
        return;
    }
    document.getElementById('display_name').textContent = name;

    document.getElementById('page6').classList.remove('active');
    document.getElementById('page7').classList.add('active');

    console.log("7ページ目に切り替えたよ!");
});