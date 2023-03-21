import ListNode from "./listNode";

const LinkedList = () => {
  let list = {};

  const append = (value) => {
    if (Object.keys(list).length === 0) {
      list.value = value;
      list.next = null;
    } else {
      const newNode = ListNode(value);

      let listCopy = { ...list };
      while (listCopy.next) {
        listCopy = listCopy.next;
      }

      listCopy.next = newNode;
    }
  };

  const prepend = (value) => {
    if (Object.keys(list).length === 0) {
      list.value = value;
      list.next = null;
    } else {
      const newNode = ListNode(value, list);
      list = newNode;
    }
  };

  return { append, prepend };
};

export default LinkedList;
