import ListNode from "./listNode";

const LinkedList = () => {
  let list;

  const append = (value) => {
    const newNode = ListNode(value);

    if (!list) {
      list = newNode;
    } else {
      let listCopy = list.next ? { ...list } : list;

      while (listCopy.next) {
        listCopy = listCopy.next;
      }

      listCopy.next = newNode;
    }
  };

  const prepend = (value) => {
    if (!list) {
      const newNode = ListNode(value);
      list = newNode;
    } else {
      const newNode = ListNode(value, list);
      list = newNode;
    }
  };

  const size = () => {
    let listCopy;
    let counter = 0;

    if (list) listCopy = { ...list };

    while (listCopy) {
      counter++;
      listCopy = listCopy.next;
    }

    return counter;
  };

  const head = () => list;

  const tail = () => {
    let listCopy;

    if (list) {
      listCopy = { ...list };

      while (listCopy.next) {
        listCopy = listCopy.next;
      }
    }

    return listCopy;
  };

  const at = (index) => {
    let listCopy;

    if (list && index >= 0) {
      listCopy = { ...list };

      for (let i = 0; i < index; i++) {
        if (listCopy.next) {
          listCopy = listCopy.next;
        } else {
          return undefined;
        }
      }
    }

    return listCopy;
  };

  return { append, prepend, size, head, tail, at };
};

export default LinkedList;
