'use strict';
{

const mItems_a = document.querySelectorAll('.menu li a');
const mItems_l = document.querySelectorAll('.menu li');
const contents = document.querySelectorAll('.cont');


mItems_a.forEach(clickedItem => {
  clickedItem.addEventListener('click', e => {
    e.preventDefault(); //a要素のページ変遷キャンセル

    mItems_a.forEach(item => {
      item.classList.remove('active'); //すべてのa要素からactiveクラスを取り除く
    });

    clickedItem.classList.add('active');// クリックされたa要素にアクティブクラスをつける

    contents.forEach(content => {
      content.classList.remove('active'); //a要素がクリックされたらcontのアクティブをはずす
    });
    document.getElementById(clickedItem.dataset.id).classList.add('active');
  });
});

mItems_l.forEach(item2 => {
  item2.addEventListener('click', () => {
    mItems_l.forEach(item => {
      item.classList.remove('active'); //すべてのli要素からアクティブクラスを取り除く
    });
    item2.classList.add('active'); //クリックされたli要素にアクティブクラスをつける

    contents.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(item2.dataset.id).classList.add('active');
  });
});

const detail = document.querySelector('.detail');
let btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    if(btn.innerHTML == '詳細') {
      btn.innerHTML = '閉じる';
    } else {
      btn.innerHTML = '詳細';
    }
      detail.classList.toggle('hidden');


});
}
