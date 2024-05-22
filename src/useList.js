import { useState } from "react";

export function useList() {
  const [list, setList] = useState([])

  /** Создать новый элемент. */
  const createItem = () => {
      setList(
        list.concat({
          id: crypto.randomUUID(),
          title: '',
          done: false,
        })
      )
  };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id, title) => {
    console.log(list)
    setList(
      list.map((item)=>{
        console.log('item.id',item.id)
        if(item.id === id){
          item.title = title;
          return item
        }
        console.log('item after',item);
      })
    )
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {};

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {
    setList(
      list.filter((item)=>{
        console.log('удаляю',item)
      })
    )
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
