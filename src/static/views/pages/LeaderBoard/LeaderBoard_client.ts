class LeaderBoard {
  static init() {
    const currentUserId = window.localStorage.getItem('type_as_pro_user_id')!;

    const tableItems = Array.from(document.querySelectorAll('.LeaderBoard__TableItem')!);
    const currentItem = tableItems.find((element) => element.innerHTML === currentUserId);
    currentItem.classList.add('LeaderBoard__TableItem_current');
    currentItem.innerHTML = 'Вы';
  }
}

export {
  LeaderBoard
};
